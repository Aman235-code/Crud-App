import mongoose from 'mongoose'

// define schema
const postSchema = new mongoose.Schema({
    title : {type:String, required: true, trim:true},
    body : {type:String, required: true, trim:true},
})

// compile schema
const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post;