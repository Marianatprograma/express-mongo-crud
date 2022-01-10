import { connect } from "mongoose"

(async () => {
  try {
    const db = await connect('mongodb://localhost/marianota');
    console.log("DB connected to", db.connection.name);   

  } catch (error) {
    console.error(error);
  }
})();
