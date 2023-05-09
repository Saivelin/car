const { User } = require('../models/models')
const ApiError = require('../error/ApiError')

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { secret } = require('../config/auth.config.js')

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
            const { lfp, password } = req.body
            if (!lfp || !password) {
                return next(ApiError.badRequest("Некорректный email или пароль"))
            }
            const candidate = await User.findOne({ where: { lfp } })
            if (candidate) {
                return next(ApiError.badRequest("Такой пользователь уже существует"))
            }
            const hashPassword = bcrypt.hashSync(password, 8)
            const newPerson = await User.create({ lfp, password: hashPassword })
            const token = generateAccessToken(newPerson.id, newPerson.role, newPerson.lfp)
            return res.status(200).json({ status: true, token: token })
        } catch (e) {
            res.status(400).json({ status: false, errorName: e })
        }
    }

    async login(req, res, next) {
        const { lfp, password } = req.body
        const user = await User.findOne({ where: { lfp } })
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

    async check(req, res, next) {
        const token = generateAccessToken(req.user.id, req.user.role, req.user.lfp)
        return res.json({ status: true, token: token })
    }

    async checkAnyRole(req, res, next) {
        return res.json({ status: true })
    }

    async deleteUserById(req, res) {
        const { id } = req.params

        const user = await User.findOne({ where: { id } })
        user.destroy()
        return res.json({ status: true, user: user })
    }
}

module.exports = new UserController()