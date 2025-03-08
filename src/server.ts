import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  app.listen(config.port, () => {
    console.log(`Express app listening on port ${config.port}`);
  });
}

main();
