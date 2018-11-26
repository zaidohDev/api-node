import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }

})

export default mongoose.model('User', User)