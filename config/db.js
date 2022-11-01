const sequelize = require('./seq');

const connection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection succesfully\n\n\n');
    } catch (error) {
        console.log("Connection error" + error);
    }
}

module.exports = connection