import { nanoid } from "nanoid";
import URLModel from "../models/url.js";

export async function GenShortURL(req, res) {
  const shortId = nanoid(8);
  const url = req.body?.url;

  if (!url) {
    return res.redirect("/");
  }

  await URLModel.create({
    shortID: shortId,
    redirectURL: url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  const AllURLs = await URLModel.find({});

  return res.redirect(`/?id=${shortId}`)
}

export async function GetByShortId(req, res) {
  const shortid = req.params.shortid;
  const entry = await URLModel.findOneAndUpdate(
    {
      shortID: shortid,
    },
    {
      $push: {
        visitHistory: {
          timestamp: new Date(),
        },
      },
    },
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  let targetURL = entry.redirectURL;
  if (!targetURL.startsWith("http://") && !targetURL.startsWith("https://")) {
    targetURL = `https://${targetURL}`;
  }

  return res.redirect(targetURL);
}

export async function GetAnalatics(req, res) {
  const shortID = req.params.shortid;
  const result = await URLModel.findOne({
    shortID,
  });

  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.status(200).json({
    TotalClicks: result.visitHistory.length,
    Analatics: result.visitHistory,
  });
}
