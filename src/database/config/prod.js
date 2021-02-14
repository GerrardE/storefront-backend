module.exports = {
    "prod": {
        "host": process.env.PROD_HOST,
        "user": process.env.PROD_USER,
        "password": process.env.PROD_PASSWORD,
        "database": process.env.PROD_DATABASE,
        "driver": process.env.PROD_DRIVER,
        "multipleStatements": true
    },
    "sql-file": true
}