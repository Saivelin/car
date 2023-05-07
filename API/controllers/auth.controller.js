class authController {
    async registration(req, res) {
        try {

        } catch (e) {
            res.json({ status: false, errorName: e })
        }
    }

    async login(req, res) {
        try {

        } catch (e) {
            res.json({ status: false, errorName: e })
        }
    }

    async getUsers(req, res) {
        try {
            res.json("server worked");
        } catch (e) {
            res.json({ status: false, errorName: e })
        }
    }
}

module.exports = new authController()