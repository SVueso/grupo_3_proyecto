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
            discount:DataTypes.INTEGER,
            image:DataTypes.STRING,
            description:DataTypes.STRING,
            stock:DataTypes.INTEGER,
            imageb:DataTypes.STRING,
            imagec:DataTypes.STRING,
            imaged:DataTypes.STRING,
        },
       
        {
           
            timestamps:false,

        }
    );
    return product
}