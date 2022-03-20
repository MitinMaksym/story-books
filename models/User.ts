import {Schema, Document, model} from 'mongoose'

export type User = {
    googleId:string;
    displayName:string;
    firstName:string;
    lastName:string;
    image:string;
    createdAt?:Date
}

  
const userSchema = new Schema<User>({
    googleId:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

const userModel = model<User>('User',userSchema)

export default userModel