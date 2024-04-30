import jwt from "jsonwebtoken";
function rangers(token, secret = "the king in the north") {
  return jwt.verify(token, secret);
}

export default rangers;
