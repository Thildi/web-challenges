import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/greeting") {
    response.statusCode = 200;
    response.end("Hello Thildi!");
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
