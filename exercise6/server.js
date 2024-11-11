import { createServer } from "node:http";
import url from "node:url";

const hostname = "127.0.0.1";
const port = 3000;

const calculate = (a, b, operation) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid number type!";
  }

  if (b === 0 && operation === "div") {
    return "Cannot divide by zero!";
  }

  switch (operation) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      return a / b;
    default:
      return "Unknown operation";
  }
};

const server = createServer((req, res) => {
  const { query } = url.parse(req.url, true);
  const { a, b, operation } = query;

  const parsedA = parseFloat(a);
  const parsedB = parseFloat(b);

  if (isNaN(parsedA) || isNaN(parsedB) || !operation) {
    // we can use without frontend code (index.html and script.js)
    // res.statusCode = 400;
    // res.setHeader("Content-Type", "text/html");
    // res.end(
    //   `<h1>400 Bad Request</h1><p>Invalid input or missing parameters. Use ?a=1&b=2&operation=add</p>`
    // );

    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end(
      "400 Bad Request\n Invalid input or missing parameters. Use ?a=1&b=2&operation=add\n"
    );
    return;
  }

  const result = calculate(parsedA, parsedB, operation);

  // we can use without frontend code (index.html and script.js)
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  // res.end(`<h1>Result of ${parsedA} ${operation} ${parsedB} is ${result}</h1>`);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.end(result.toString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
