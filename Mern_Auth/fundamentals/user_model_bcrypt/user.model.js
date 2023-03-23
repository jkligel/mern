const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be 8 characters or more"]
    }
}, {timestamps: true})

// fields we don't want to save in MongoDB
UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPasword)
    .set( value => this._confirmPasword = value);

// Specifically we will be using the "pre hook" and having it run before validations.
UserSchema.pre('validate', function(next){
    if(this.password !== this._confirmPasword){
        this.invalidate('confirmPassword', 'Password must match confirm password')
    }
    next()
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
});