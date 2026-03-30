import mongoose from 'mongoose'

const EmailsSchema = new mongoose.Schema({
    Emails:{
        type:String,
        required:true,
        lowercase: true,
        trim :true

    }
})

export default mongoose.model("Emails",EmailsSchema)