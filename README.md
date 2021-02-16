# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app for a storefront. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
This application makes use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Installation and Setup

### 1. Installation Steps

- Clone the repository to your local computer: `git clone https://github.com/GerrardE/storefront-backend.git`,
- In the root directory of the project run: `yarn` to install all project dependencies.

### 2. Setup

- Create a new database on your local computer and note the credentials,
- Create a new `.env` file on the root of the project and copy the contents of `.env.example` into it, replace the credendtials with your local credentials depending on the environment you choose(prod, test or dev) e.g database port, username, password, database, salt(integer i.e 10), secret(string e.g abnormal), app `PORT`(integer e.g 8000)
- Run `yarn watch:dev` to spin up an instance of the project on your local machine.

At this point the apis can be accessed at the address(localhost) and `PORT` of your local machine e.g `localhost:8000`


