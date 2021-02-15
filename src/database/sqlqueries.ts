// Create User
const createUser = "insert into users (firstName, lastName, email, password) values ($1, $2, $3, $4) returning *";

// Return users
const returnUsers = "select id, firstname, lastname, email from users";

// Return user
const returnUser = "select id, firstname, lastname, email from users where id = $1";

// Create Category
const createCategory = "insert into categories (name, notes) values ($1, $2) returning *";

// Return categories
const returnCategories = "select * from categories";

export {
  createUser,
  returnUsers,
  returnUser,
  createCategory, 
  returnCategories,
}