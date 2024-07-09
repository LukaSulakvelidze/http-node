const http = require("http");
// const fs = require("fs");
const fs = require("fs/promises");


// 1)

async function dirNameChecker(folderName) {
  try {
    const currentFolder = await fs.readdir(__dirname);
    if (currentFolder.includes(folderName)) {
      console.log("This folder exist");
    } else {
      console.log("This folder does not exist");
    }
  } catch (error) {
    console.log(error);
  }
}

dirNameChecker("main.js");

// 2)

// const myServer = http.createServer((req, res) => {
//   const data = fs.readFileSync("data.json", "utf-8");
//   res.setHeader("content-type", "text/plain")
//   res.write(data)
//   res.end()
// })

// myServer.listen(3000, () => {
//     console.log("Server is running on port http://localhost:3000")
// })

// 3)

// const myServer = http.createServer((req, res) => {
//   res.setHeader("content-type", "text/plan")
//   const math = Math.round(Math.random() * 100)
//   res.write(math.toString())
//   res.end()
// })

// myServer.listen(3000, () => {
//   console.log("Server is running on port http://localhost:3000")
// })

// 4)

// const myServer = http.createServer((req, res) => {
//   const markup = `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <table>
//       <tr>
//         <th>id</th>
//         <th>name</th>
//         <th>email</th>
//       </tr>
//       <tr>
//         <td>1</td>
//         <td>John</td>
//         <td>john@gmail.com</td>
//       </tr>
//     </table>
//   </body>
// </html>
// `;
//   res.setHeader("content-type", "text/html");
//   res.write(markup);
//   res.end();
// });

// myServer.listen(3000, () => {
//   console.log("Server is running on port http://localhost:3000");
// });
