const Sequelize = require('sequelize');

// set up sequelize to point to our postgres database
const sequelize = () => {
    const sequelize = new Sequelize('crud', 'postgres', 'blablabla5', {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        dialectOptions: {},
        query: { raw: true }
    });
    return sequelize
}

module.exports = {sequelize: sequelize()}