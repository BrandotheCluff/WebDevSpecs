require('dotenv').config()
const Sequelize = require('sequelize')
// const { DATABASE_URL } = process.env
// const sequelize = new Sequelize(DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// })

const workout = [];
id = 0;

module.exports = {

    getWorkout: (req, res) => {
        res.status(200).send(workout)
        console.log(workout)
    }

    

}