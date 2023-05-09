const { User } = require('../models/models')
const ApiError = require('../error/ApiError')

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { secret } = require('../config/auth.config.js')

const generateAccessToken = (id, role, nsp) => {
    const payload = {
        id,
        role,
        lfp
    }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class UserController {
    async registration(req, res, next) {
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
            return res.status(200).json({ status: true, user: newPerson })
        } catch (e) {
            res.status(400).json({ status: false, errorName: e })
        }
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const { id } = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()