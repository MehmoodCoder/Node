import URLModel from "../models/url.js";


export async function HomeUI(req, res) {
  const AllURLs = await URLModel.find({})
  const GenId = req.query.id;
  res.render("home", {
    urls: AllURLs,
    id: GenId
  });
}

export async function SignUp(req, res){
    res.render("signup")
}