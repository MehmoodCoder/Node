import { nanoid } from "nanoid";
import URLModel from "../models/url.js";

export async function GenShortURL(req, res) {
  const shortId = nanoid(8);
  const url = req.body?.url;

  if (!url) {
    return res.status(400).json({ error: "Url is required" });
  }

  await URLModel.create({
    shortID: shortId,
    redirectURL: url,
    visitHistory: [],
  });

  res.status(201).json({ id: shortId });
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

  res.redirect(entry.redirectURL);
}

export async function GetAnalatics(req, res) {
  const shortID = req.params.shortid;
  const result = await URLModel.findOne({
    shortID,
  });

  //   console.log(result);

  res.status(200).json({
    TotalClicks: result.visitHistory.length,
    Analatics: result.visitHistory,
  });
}
