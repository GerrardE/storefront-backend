import IObjectConstructor from "../interfaces/object";

/**
 * @param {user} user object from the database
 * @param {token} token gotten from payload
 * @returns {object} object
 */
const userExtractor = (user: IObjectConstructor, token: string): IObjectConstructor => {
    const {
      email, id, firstName, lastName
    } = user;
  
    return {
      id,
      firstName,
      lastName,
      email,
      token,
    };
  };
  
  export default userExtractor;
  