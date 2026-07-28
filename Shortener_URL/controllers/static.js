import URLModel from "../models/url.js";


export async function HomeUI(req, res) {
  const AllURLs = await URLModel.find({})
  res.render("home", {
    urls: AllURLs
  });
}