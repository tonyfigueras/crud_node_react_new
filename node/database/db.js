import { Sequelize } from "sequelize";

const db = new Sequelize('blogs_node','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db