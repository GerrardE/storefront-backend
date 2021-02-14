module.exports = {
    "test": {
        "host": process.env.TEST_HOST,
        "user": process.env.TEST_USER,
        "password": process.env.TEST_PASSWORD,
        "database": process.env.TEST_DATABASE,
        "driver": process.env.TEST_DRIVER,
        "multipleStatements": true
    },
    "sql-file": true
}