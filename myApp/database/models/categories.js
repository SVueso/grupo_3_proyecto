module.exports= function(sequelize,DataTypes){
    const Category = sequelize.define(
        // primer parametro, nombre
        'Category',
        // segundo, un objeto literal aclarando los valores de los datos
        {
            id:{
                type:DataTypes.INTEGER,
                autoincrement: true,
                primaryKey:true},
            title:DataTypes.VARCHAR,
            image:DataTypes.VARCHAR
        },
        
        {
            tableName:"",
            timestamps:false,

        }
    );
    return Category
}