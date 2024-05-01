
const Sequelize= require('sequelize');

const sequelize= new Sequelize('node-connect','root','Harshit7174@',{
    dialect:'mysql',
    host:'localhost'
});

sequelize.define('product',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

sequelize.sync().then(()=>{
    console.log("Connected");
})
module.exports=sequelize;

