import express from "express";
import * as OpenApiValidator from "express-openapi-validator";

let port: number;
if (process.env.PORT) {
  port = parseInt(process.env.PORT);
} else {
  port = 8080;
}

const app = express();

app.use(
  OpenApiValidator.middleware({
    apiSpec: "openapi/greeter.yaml",
    validateRequests: true,
    validateResponses: true,
  })
);

app.get("/hello", (req: express.Request, res: express.Response) => {
  res.send({
    message: `Hello, ${req.query.name}!`,
  });
});

app.listen(port, () => console.log(`Server ready on port ${port}.`));

export default app;
