import URLModel from "../models/url.js";

export async function HomeUI(req, res) {
  if (!req.user) {
    return res.redirect("/login");
  }
  const AllURLs = await URLModel.find({ createdBy: req.user?._id });
  const GenId = req.query?.id;
  return res.render("home", {
    urls: AllURLs,
    id: GenId,
  });
}

export async function SignUp(req, res) {
  res.render("signup");
}

export async function LogIn(req, res) {
  res.render("login");
}
