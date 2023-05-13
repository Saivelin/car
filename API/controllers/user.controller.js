const { User } = require('../models/models')
const ApiError = require('../error/ApiError')

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { secret } = require('../config/auth.config.js')

const uuid = require('uuid')

const generateAccessToken = (id, role, lfp) => {
    const payload = {
        id,
        role,
        lfp
    }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class UserController {
    async registration(req, res, next) {
        console.log("reg")
        try {
            const { lfp, password, phone } = req.body
            if (!lfp || !password || !phone) {
                return next(ApiError.badRequest("Некорректный email, пароль или телефон"))
            }
            const candidate = await User.findOne({ where: { phone } })
            if (candidate) {
                return next(ApiError.badRequest("Такой пользователь уже существует"))
            }
            const hashPassword = bcrypt.hashSync(password, 8)
            const newPerson = await User.create({ lfp, password: hashPassword, phone: phone })
            const token = generateAccessToken(newPerson.id, newPerson.role, newPerson.lfp)
            return res.status(200).json({ status: true, token: token })
        } catch (e) {
            res.status(400).json({ status: false, errorName: e })
        }
    }

    async login(req, res, next) {
        try {
            const { password, phone } = req.body
            const user = await User.findOne({ where: { phone } })
            if (!user) {
                return next(ApiError.internal("Пользователь не найден"))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return next(ApiError.internal("Неверный пароль"))
            }
            const token = generateAccessToken(user.id, user.role, user.lfp)
            return res.status(200).json({ status: true, token: token })
        }
        catch {
            return res.json({ status: false, token: "" })
        }
    }

    async update(req, res, next) {
        try {
            const { phone, nick, lfp, lfpOrNick, about, id } = req.body
            const { img } = req.files
            console.log(req.body)
            console.log("updatedUser")
            let fileName = uuid.v4() + ".png"
            if (img) {
                if (img.mimetype.split("/")[0] != "image") {
                    return res.json({ status: false })
                }
                img.mv('./uploads/' + fileName);
            }
            let updatedUser;
            if (img) {
                updatedUser = await User.update({ lfp: lfp, phone: phone, logo: fileName, nick: nick, lfpOrNick: lfpOrNick, about: about }, { where: { id } })
            }
            else {
                updatedUser = await User.update({ lfp: lfp, phone: phone, nick: nick, lfpOrNick: lfpOrNick, about: about }, { where: { id } })
            }
            return res.status(200).json({ status: true, user: updatedUser })
        }
        catch {
            console.log("err")
            return res.status(400).json("ERROR")
        }
    }

    async check(req, res, next) {
        const token = generateAccessToken(req.user.id, req.user.role, req.user.lfp)
        return res.json({ status: true, token: token })
    }

    async checkAnyRole(req, res, next) {
        return res.json({ status: true })
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params
            if (id && Number(id)) {
                const user = await User.findOne({ where: { id } })
                return res.json({ user: { id: user.id, lfp: user.lfp, phone: user.phone, nick: user.nick, logo: user.logo, lfpOrNick: user.lfpOrNick, about: user.about } })
            }
            return res.json({ message: "Not valuable id" })
        }
        catch {
            return res.json({ status: false, user: false })
        }
    }

    async deleteUserById(req, res) {
        try {
            const { id } = req.params

            const user = await User.findOne({ where: { id } })
            user.destroy()
            return res.json({ status: true, user: user })
        }
        catch {
            return res.json({ status: false, user: false })
        }
    }
}

module.exports = new UserController()