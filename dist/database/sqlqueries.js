"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnUser = exports.returnUsers = exports.createUser = void 0;
// Create User
var createUser = 'insert into users (firstName, lastName, email, password) values ($1, $2, $3, $4) returning *';
exports.createUser = createUser;
// Return users
var returnUsers = 'select * from users';
exports.returnUsers = returnUsers;
// Return user
var returnUser = 'select * from users where id = $1';
exports.returnUser = returnUser;
