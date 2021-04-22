import express from "express";
import { launchPuppeteer } from "./browser.js";

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Terminkalender ist online!');
})

app.get('/date', async (rew, res) => {
  const websiteHomepage = 'https://termine.stadt-muenster.de/select2?md=1';

  const date = await launchPuppeteer(websiteHomepage);
  res.send(date.toJSON());
})

app.listen(PORT, HOST, () => {
  console.log(`Example app listening at http://${HOST}:${PORT}`);
})