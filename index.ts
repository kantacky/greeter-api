import express from "express";
import * as OpenApiValidator from "express-openapi-validator";

const port = 8000;

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
