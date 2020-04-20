import jwt from 'jsonwebtoken';

/**
 * @typedef {{
 *  id: string, firstName: string, email: string,
 * }} UserData
 */

/**
 * @description Method to generate a token
 * @param {UserData} Data data used to generate the token
 *
 * @returns {string} Returns the generated token
 */
const generateUserAuthToken = ({ id, email, firstName }) => {
  try {
    return jwt.sign(
      {
        id,
        email,
        firstName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '10d',
      },
    );
  } catch (error) {
    throw new Error(error);
  }
};
export { generateUserAuthToken };
