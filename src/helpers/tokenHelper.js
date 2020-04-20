import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const setupTokenData = (data) => ({
  email: data.email,
  firstName: data.firstName,
  id: data.id,
});

/**
 *
 * @param {string} token
 * @returns {*} decodedToken
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export { setupTokenData, verifyToken };
