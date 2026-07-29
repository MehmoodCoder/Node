import User from '../models/user.js'

export async function SignUp(req, res) {
    const {name, email, password} = req.body
    await User.create({
        name,
        email,
        password,
    })

    return res.render("home")
}

