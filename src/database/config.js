
export const dev = {
  dev: {
    user: process.env.DEV_USER,
    password: process.env.DEV_PASSWORD || '',
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_HOST,
    driver: process.env.DEV_DRIVER,
    multipleStatements: true
  },
  "sql-file": true
};

export const test = {
    test: {
        user: process.env.TEST_USER,
        password: process.env.TEST_PASSWORD || '',
        database: process.env.TEST_DATABASE,
        host: process.env.TEST_HOST,
        driver: process.env.TEST_DRIVER,
        multipleStatements: true
      },
    "sql-file": true
};

export const prod = {
    test: {
        user: process.env.PROD_USER,
        password: process.env.PROD_PASSWORD || '',
        database: process.env.PROD_DATABASE,
        host: process.env.PROD_HOST,
        driver: process.env.PROD_DRIVER,
        multipleStatements: true
      },
    "sql-file": true
};