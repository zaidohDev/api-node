import mongoose from 'mongoose'

const Blog = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

export default mongoose.model('Blog', Blog)