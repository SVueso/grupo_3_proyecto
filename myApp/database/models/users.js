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
            firstName:DataTypes.VARCHAR,
            lastName:DataTypes.VARCHAR,
            image:DataTypes.VARCHAR,
            address:DataTypes.VARCHAR,
            zipcode:DataTypes.VARCHAR
        },
        
        {
            tableName:"",
            timestamps:false,

        }
    );
    return user
}