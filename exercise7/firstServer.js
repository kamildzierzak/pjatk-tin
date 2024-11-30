import { createServer } from "node:http";
import url from "node:url";

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
            <form action="/result" method="GET">
              <label for="answer">Czy lubisz koty?</label>
              <input type="text" name="answer">
              <button type="submit">Wysylam</button>
            </form>
          </body>
        </html>
        `
    );
  } else if (pathname === "/result" && req.method === "GET") {
    const answer = query.answer || "Uwielbiam!";
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
      `
        <htmL>
          <body>
            <h1>Przewidzialem ze Twoja odpowiedz to: ${answer}.</h1>
            <a href="/">Odpowiedz jeszcze raz</a>
          </body>
        </html>
        `
    );
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>404 - Unlucky! Strony nie znaleziono</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
