import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login User
const loginUser = async (req, res) => {

}

const createToken = async (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET)
}

// register User
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // checking is user already registered
        const exits = await userModel.findOne({ email });
        if (exits) {
            return res.json({ success: false, message: "User already exists" })
        }

        //validating email format & strong password 
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" });
        }

        if (password.lenth < 8) {
            return res.json({ success: false, message: "Please enter a strong password 8 characters at least " })
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        // saving user to database
        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
        
    }
}

export { loginUser, registerUser }