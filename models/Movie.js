const { string } = require("i/lib/util")
const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        director: {
            type: String
        },
        desc: {
            type: String
        },
        price: {
            type: String
        },
        rating: {
            type: Number
        },
        releaseYear: {
            type: String
        },
        profile: {
            type: String
        },
        genres: {
            type: [String]
        }
    }
)

const Movie = mongoose.model("Movie", MovieSchema)
module.exports = Movie
