import User from '../models/user.js'
import { v4 as uuidv4 } from 'uuid';
import { setUser, getUser } from "../services/auth.js";

export async function SignUp(req, res) {
    const {name, email, password} = req.body
    await User.create({
        name,
        email,
        password,
    })

    return res.redirect("/")
}


export async function LogIn(req, res) {
    const {email, password} = req.body
    const isLogin = await User.findOne({
        email,
        password,
    })

    if (!isLogin) {
        return res.render("login", {
            error: "Invalid Email or Password"
        });
    }

    // const sessionId = uuidv4() // no longer needed since we are using jwt 

    const token = setUser(isLogin)

    // return res.json({ token })

   const isProduction = process.env.NODE_ENV === "production";

res.cookie('token', token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
});

    return res.redirect("/")
}

