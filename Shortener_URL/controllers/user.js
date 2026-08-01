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

    const sessionId = uuidv4()

    setUser(sessionId, isLogin)
    res.cookie('uid', sessionId)

    return res.redirect("/")
}

