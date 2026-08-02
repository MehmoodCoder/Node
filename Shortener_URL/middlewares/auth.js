import { getUser } from "../services/auth.js";

export async function LoggedInUsersOnly(req, res, next) {

    const userid = req.cookies?.token

    if (!userid) {
        return res.redirect('/login')
    }

    const user = getUser(userid)

    if (!user) {
        return res.redirect('/login')
    }

    req.user = user
    next()
}

export async function checkAuth(req, res, next) {
    const userid = req.cookies?.token    

    const user = getUser(userid)

    req.user = user
    
    next()
}