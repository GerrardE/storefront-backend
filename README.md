# Storefront Backend

## Getting Started

This repo contains a basic Node and Express app for a storefront.

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
- Create a new `.env` file on the root of the project and copy the contents of `.env.example` into it, replace the credendtials with your local credentials depending on the environment you want to work with (prod, test or dev) e.g database: username, password, database(name), port; salt(integer i.e 10), secret(string e.g abnormal), app `PORT`(integer e.g 8000).
- Run `yarn migrate:up` to create tables in the database configured in the previous step.
- Run `yarn watch` to spin up a local instance of the project on your machine on port `PORT` as in the `.env` file. The app would become accessible at the address `http://localhost:{PORT e.g 8000}/api/v1`

### 3. Tests
- Create a new database on your local computer and note the credentials for the test environment,
- Add credentials e.g database: username, password, database(name) and port for all `TEST` credentials.
- Run `yarn test` to see all the tests pass. 


