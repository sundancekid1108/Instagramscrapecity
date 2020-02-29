import axios from "axios";
import cheerio from "cheerio";
import database from "./database";

export const getHTML = async (url) => {
    const {data: html} = await axios.get(url);
    return html;
}

export const getInstagramFollowers = (html) => {
    const $ = cheerio.load(html);
    const dataInString = $('script[type="application/ld+json"]').html();
    const pageObject = JSON.parse(dataInString);
    return parseInt(
        pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
    );
}

export const getInstagramCount = async () => {
    const html = await getHTML('https://www.instagram.com/creamcandy123');
    //console.log("html", html);
    const instagramCount = await getInstagramFollowers(html);
    return instagramCount;
}

export const runningCron = async () => {
    const [iCount] = await Promise.all([
        getInstagramCount()
    ]);
    database.get('instagram').push({date: Date.now(), count: iCount}).write();
    console.log("End!!");
}