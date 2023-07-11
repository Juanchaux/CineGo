import {Sequelize} from 'sequelize'

const db = new Sequelize('CineGo','postgres','1234',{
    host:'localhost',
    port: 5432,
    dialect: 'mysql'
})

export default db;