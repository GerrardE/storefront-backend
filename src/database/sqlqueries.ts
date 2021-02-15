  // Create User
const createUser: string = 'insert into users (firstName, lastName, email, password) values ($1, $2, $3, $4) returning *';

// Return users
const returnUsers: string = 'select * from users';

// Return user
const returnUser: string = 'select * from users where id = $1';

export {
    createUser,
    returnUsers,
    returnUser,
}