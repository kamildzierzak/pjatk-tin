import { createServer } from "node:http";
import url from "node:url";
import { writeFile } from "node:fs";

const port = 3000;

const server = createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
      `
        <htmL>
          <body>
            <form action="/save" method="GET">
              <label for="answer">Czy lubisz koty?</label>
              <input type="text" name="answer">
              <button type="submit">Zapisz</button>
            </form>
          </body>
        </html>
        `
    );
  } else if (pathname === "/save" && req.method === "GET") {
    const answer = query.answer || "Uwielbiam!";
    const answerToSave = `${answer}`;

    writeFile("answer.txt", answerToSave, err => {
      if (err) {
        console.error("Error while saving the answer to file: ", err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>500 - Unlucky! Błąd serwera!</h1>");
        return;
      }

      res.writeHead(302, { location: "/" });
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>404 - Unlucky! Strony nie znaleziono</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
