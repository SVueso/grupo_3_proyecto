module.exports= function(sequelize,DataTypes){
    const Product = sequelize.define(
        // primer parametro, nombre
        'Product',
        // segundo, un objeto literal aclarando los valores de los datos
        {
            id:{
                type:DataTypes.INTEGER,
                autoIncrement: true,
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
            cost:DataTypes.INTEGER,
            sku:DataTypes.STRING
        },
       
        {
           
            tableName:"products",
            timestamps:false,

        }
    );
    Product.associate = function(models){
        Product.belongsToMany(models.Category, {
            as: "categories",
            through: "category_product",
            foreignKey: "product_id",
            otherKey:"category_id",
            timestamps: false

        })
    }
    return Product
}