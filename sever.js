const request = require("request");
const cheerio = require("cheerio");

const data = [];

request(
  "https://laptoping.com/specs/product/lenovo-thinkpad-x1-carbon-gen-9/",
  (error, response, html) => {
    // console.log(response);
    if (!error && response.statusCode == 200) {
      //   console.log(html);
      const $ = cheerio.load(html);

      $(".shop_attributes tr").map((i, el) => {
        const tableHd = $(el).children("th").text();
        const tableDt = $(el).children("td").text();
        data.push({ tableHd, tableDt });
        console.log(data);
      });
    }
  }
);
