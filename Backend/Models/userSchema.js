const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
})

//password hashing
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) 
        return next();
    
    console.log('Hashing password');
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

//Comapring password with hashed password

userSchema.methods.comparePassword = async function(enteredPassword) {
    try{
        return await bcrypt.compare(enteredPassword, this.password);
    }
    catch(error){
        console.error('An error occurred', error);
    }
}

//Generating token
userSchema.methods.generateToken = async function() {
if (!process.env.JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET is missing');
    }

    return jwt.sign({email:this.email, id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h',
    });
}

module.exports = mongoose.model('User', userSchema);