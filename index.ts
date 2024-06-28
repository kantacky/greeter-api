import express from "express";
import * as OpenApiValidator from "express-openapi-validator";

let port: number;
if (process.env.PORT) {
  port = parseInt(process.env.PORT);
} else {
  port = 8080;
}

const app = express();

app.use(OpenApiValidator.middleware({
  apiSpec: "./api/greeter.yaml",
  validateRequests: true,
  validateResponses: true,
}));

app.listen(port, () => {
  console.log(`Start on port ${port}.`)
})

app.get("/hello", (req: express.Request, res: express.Response) => {
  res.send(`Hello, ${req.query.name}!`);
});
