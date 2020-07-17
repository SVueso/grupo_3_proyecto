module.exports = (sequelize, Datatypes) =>{
    const category_product = sequelize.define (
        "category_product",
        {},
        {tableName: "category_product",
        timestamps:false,}
    )
        return category_product;
}