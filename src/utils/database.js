import { connect as _connect } from "mongoose";
import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    await _connect(DATABASE_URL, {
      dbName: "steak-house-menu",
    });
    return "Database connected";
  } catch (error) {
    return error;
  }
};

export default connect;
