module.exports= function(sequelize,DataTypes){
    const product = sequelize.define(
        // primer parametro, nombre
        'Product',
        // segundo, un objeto literal aclarando los valores de los datos
        {
            id:{
                type:DataTypes.INTEGER,
                autoincrement: true,
                primaryKey:true},
            name:DataTypes.VARCHAR,
            disscount:DataTypes.VARCHAR,
            description:DataTypes.VARCHAR,
            price:DataTypes.INTEGER,
            stock:DataTypes.INTEGER,
        },
       
        {
            tableName:"",
            timestamps:false,

        }
    );
    return product
}