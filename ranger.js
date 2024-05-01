import jwt from "jsonwebtoken";

const rangers = async (token, secret = "the king in the north") => {
  try {
   const result= await jwt.verify(token, secret);
    return [true, result]; // Return true if verification succeeds
  } catch (error) {
    return [false]; // Return false if verification fails
  }
};

export default rangers;
