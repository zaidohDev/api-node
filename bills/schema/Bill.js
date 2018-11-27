import mongoose from 'mongoose'

const Bill = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    date: {
       type: Date,
       default: Date.now 
    }
})

export default mongoose.model('Bill', Bill)