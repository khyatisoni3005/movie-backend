const Movie = require("../models/Movie")

module.exports = {
    async create(req, res) {
        // const filepath = `public/images/${req.file.filename}`
        delete req.body._id
        let data = await Movie.create(req.body)


        res.send(data)

    },
    async list(req, res) {
        console.log("list api")
        let data = await Movie.find()
        return res.send(data)
    },
    async view(req, res) {
        let data = await Movie.findOne({ _id: req.params.id })
        res.send(data)
        console.log(data);
    },
    async delete(req, res) {
        let data = await Movie.deleteOne(
            {
                _id: req.params.id
            },
            req.body
        )
        res.send(data)
    },
    async update(req, res) {
        let data = await Movie.findOneAndUpdate(
            {
                _id: req.params.id
            },
            req.body,
            { new: true }
        )
        res.send(data)
    },
    async search(req, res) {
        if (!req.query.keyword) {
            let data = await Movie.find()
            return res.send(data)
        }
        let data = await Movie.find({
            "$or": [
                { "name": { $regex: req.query.keyword, $options: 'i' } },
                { "director": { $regex: req.query.keyword, $options: 'i' } },
            ]
        });
        res.send(data);
    },

    async practice(req, res) {
        const data = await Movie.find({
            director: "fs",
            name: "pongi"
        })
        console.log("practice")
        res.json(data);
    }
}