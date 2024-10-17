import { pbkdf2Sync } from "crypto";
import { SECRET } from "./env";

const encrypt = (password) => {
  const encrypted = pbkdf2Sync(password, SECRET, 1000, 64, "sha512")
    .toString("hex");
  return encrypted;
};

export default {
  encrypt,
};
