const app = require("./app")

const PORT = process.env.PRT || 3001;



app.listen(PORT, () => {
   console.log(`Server raised in port:http://localhost:${PORT}`);
});














// const http = require("http");
// import getCharById from "./controllers/getCharById";

// http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   if (req.url.includes("/rickandmorty/character")) {
//     const id = req.url.split("/").at(-1);
//     getCharById(res, id);
//   }
// }).listen(3001, "localhost");




// const http = require("http");
// import getCharById from "./controllers/getCharById";

// http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   if (req.url.includes("/rickandmorty/character")) {
//     const id = req.url.split("/").at(-1);
//     getCharById(res, id);
//   }
// }).listen(3001, "localhost");