const bcrypt = require('bcrypt')
const userModel = require('../models/userModel');
const genToken = require('../utils/genToken');

const POST_REGISTER = async (req,res, next) => {
    const {email, password, confirmPass} = req.body
    try {
        if(email === '' || password === '' || confirmPass === ''){
            res.status(400)
            const err = new Error('Please Fill All Fields');
            err.code = 400;
            next(err)
            return
        }
        const foundUser = await userModel.findOne({email});
        if (foundUser){
            res.status(409)
            const err = new Error('Email Already Registered')
            err.code = 409;
            next(err)
            return;
        }else{
            if (password !== confirmPass){
                res.status(401)
                const err = new Error('Passwords Do Not Match!')
                err.code = 401
                next(err)
                return;
            }else{
                const hashedPass = await bcrypt.hash(password, 10);
                const newUser = await userModel.create({email, password:hashedPass});
                const token = genToken(newUser._id);  
                res.status(201).json({'USER EMAIL': newUser.email, 'TOKEN':token})
                return;
            }
        }
    } catch (error) {
        next(error)
    }
}


const POST_LOGIN = async (req,res,next) => {
    const {email, password} = req.body;
    try {
        if(email === '' || password === ''){
            res.status(400)
            const err = new Error('Please Fill All Fields');
            err.code = 400;
            next(err)
            return
        }
        const isUser = await userModel.findOne({email});
        if(isUser){
            const isMatch = await bcrypt.compare(password, isUser.password);
            if(isMatch){
                const token = genToken(isUser._id);
                res.status(200).json({'USER EMAIL':isUser.email, 'TOKEN': token});
                return;
            }else{
                res.status(401)
                const err = new Error()
                err.status = 401
                err.message = 'Incorrect Password'
                next(err)
            }
        }else{
            res.status(401)
            const err = new Error()
            err.status = 401
            err.message = 'Incorrect Email Address'
            next(err)
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    POST_REGISTER,
    POST_LOGIN
}