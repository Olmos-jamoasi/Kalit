import * as express from "express";
import routes from "./routes";
import createConnection from "./database/connection";
import env from "./utils/env";

const app = express();
const PORT = env.PORT || 3001;

// db connection
createConnection();

// register middlewares
app.use("/", routes);

app.listen(PORT, () => console.log(`app has started on port ${PORT}`));
