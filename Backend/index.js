import express from "express";
import cors from 'cors';
import {
  getHTML,
  getInstagramFollowers,
  getInstagramCount
} from "./lib/scraper";
import database from "./lib/database";
import "./lib/cron";

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!!');
  const [iCount] = await Promise.all([
    getInstagramCount()
  ]);
  res.json({ iCount });
});

app.get('/data', async (req, res, next) => {
  // get the scrape data
  const instagramData = database.value();
  // respond with json
  res.json(instagramData);
});

app.listen(2093, () => {
  console.log(`Example App running on port http://localhost:2093`);
});
