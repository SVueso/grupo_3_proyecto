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
            cost:DataTypes.INTEGER,
            sku:DataTypes.STRING
        },
       
        {
           
            tableName:"products",
            timestamps:false,

        }
    );
    product.associate = function(models){
        product.belongsToMany(models.category, {
            as: "categories",
            through: "categories_products",
            foreignKey: "categories_id",
            timestamps: false

        })
    }
    return product
}