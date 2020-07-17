module.exports= function(sequelize,DataTypes){
    const Category = sequelize.define(
        // primer parametro, nombre
        'Category',
        // segundo, un objeto literal aclarando los valores de los datos
        {
            id:{
                type:DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey:true},
                title:DataTypes.STRING,
                image:DataTypes.STRING
        },
        
        {
            tableName:"categories",
            timestamps:false,

        }
    );
    Category.associate = function(models){
        Category.belongsToMany(models.Product, {
            as: "products",
            through: "category_product",
            foreignKey: "category_id",
            otherKey:"products_id",
            timestamps: false

        })
    }
    return Category
}