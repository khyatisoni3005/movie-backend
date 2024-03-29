const jwt = require("jsonwebtoken")

const Admin = require("../models/Admin")

module.exports = {
    async signUp(req, res) {
        const params = req.body;
        let data = await Admin.create(params)
        return res.json(data)
    },

    async login(req, res) {
        const params = req.body;
        const { email, password } = params;
        console.log("email", email);
        console.log("password", password);
        const adminRecord = await Admin.findOne({
            email: email,
            password: password
        });
        if (!adminRecord) {
            return res.json({
                success: false,
                error: "your email and password are incorrect."
            })
        }
        const token = jwt.sign({ email: adminRecord.email }, 'soni');
        console.log("token", token)
        console.log("adminRecord", adminRecord)
        res.json({
            success: true,
            data: adminRecord,
            token,
        })
    }
}