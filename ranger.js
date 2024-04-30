import jwt from "jsonwebtoken";

const rangers = async (token, secret = "the king in the north") => {
  try {
    await jwt.verify(token, secret);
    return true; // Return true if verification succeeds
  } catch (error) {
    return false; // Return false if verification fails
  }
};

export default rangers;
