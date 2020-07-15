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
            title:DataTypes.STRING,
            price:DataTypes.INTEGER,
            discount:DataTypes.STRING,
            image:DataTypes.STRING,
            description:DataTypes.STRING,
            stock:DataTypes.INTEGER,
        },
       
        {
            tableName:"",
            timestamps:false,

        }
    );
    return product
}