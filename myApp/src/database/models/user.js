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
            first_name:DataTypes.STRING,
            last_name:DataTypes.STRING,
            password:DataTypes.STRING,
            password2:DataTypes.STRING,
            telephone:DataTypes.STRING,
            address:DataTypes.STRING,
            number:DataTypes.STRING,
            zipcode:DataTypes.STRING,
            state:DataTypes.STRING,
            country:DataTypes.STRING,
            image:DataTypes.STRING,
           
            

        },
        
        {
            tableName:"",
            timestamps:false,

        }
    );
    return user
}