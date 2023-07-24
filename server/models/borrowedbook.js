'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrowedBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      borrowedBook.belongsTo(models.user);
      borrowedBook.belongsTo(models.book);
    }
  }
  borrowedBook.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    borrow_date: DataTypes.STRING,
    return_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'borrowedBook',
  });
  return borrowedBook;
};