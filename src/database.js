import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect('mongodb://localhost/myapp');

    console.log("DB connected to");
  } catch (error) {
    console.log(error);
  }
})();