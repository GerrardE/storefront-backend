module.exports = {
    "dev": {
        "host": process.env.DEV_HOST,
        "user": process.env.DEV_USER,
        "password": process.env.DEV_PASSWORD,
        "database": process.env.DEV_DATABASE,
        "driver": process.env.DEV_DRIVER,
        "multipleStatements": true
    },
    "sql-file": true
}