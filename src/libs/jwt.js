import { TOKEN_SECRET_KEY } from "../config.js";
import jwt from "jsonwebtoken"; // para generar tokens para los usuarios

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET_KEY,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
