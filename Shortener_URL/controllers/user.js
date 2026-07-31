import User from '../models/user.js'
import { v4 : uuidv4 } from "uuid";

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

    const sesionId = uuidv4()

    return res.redirect("/")
}

