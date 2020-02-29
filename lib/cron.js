import cron from "node-cron";
import { runningCron } from "./scraper";

cron.schedule('* * * * *', () => {
  console.log('⏲️ RUNNING THE CRON');
  runningCron();
});
