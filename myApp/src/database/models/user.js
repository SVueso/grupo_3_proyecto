module.exports= function(sequelize,DataTypes){
    const user = sequelize.define(
        // primer parametro, nombre
        'User',
        // segundo, un objeto literal aclarando los valores de los datos
        {
            id:{
                type:DataTypes.INTEGER,
                autoincrement: true,
                primaryKey:true},
            firstName:DataTypes.STRING,
            lastName:DataTypes.STRING,
            image:DataTypes.STRING,
            address:DataTypes.STRING,
            zipcode:DataTypes.STRING
        },
        
        {
            tableName:"",
            timestamps:false,

        }
    );
    return user
}