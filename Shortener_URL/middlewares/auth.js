import { getUser } from "../services/auth.js";

export function AuthorizationHeaderVal(req, res, next){

}

export async function LoggedInUsersOnly(req, res, next) {

    // const userid = req.cookies?.token

    const UserHeader = req.headers['authorization']

    if (!UserHeader) {
        return res.redirect('/login')
    }

    const token = UserHeader.split('Bearer ')[1]
    const user = getUser(token)

    if (!user) {
        return res.redirect('/login')
    }

    req.user = user
    next()
}

export async function checkAuth(req, res, next) {
    // const userid = req.cookies?.token    

     const UserHeader = req.headers['authorization']

    if (!UserHeader) {
        return res.redirect('/login')
    }

    const token = UserHeader.split('Bearer ')[1]
    const user = getUser(token)

    req.user = user
    
    next()
}