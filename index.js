import express from "express";
import {
  getHTML,
  getInstagramFollowers,
  getInstagramCount
} from "./lib/scraper";
import "./lib/cron";

const app = express();

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!!');
  const [iCount] = await Promise.all([
    getInstagramCount()
  ]);
  res.json({ iCount });
});

app.listen(2093, () => {
  console.log(`Example App running on port 2093`);
});
