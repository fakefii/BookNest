'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class BorrowedBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BorrowedBook.belongsTo(models.user)
      BorrowedBook.belongsTo(models.book)
    }
  }
  BorrowedBook.init({
    borrowDate: DataTypes.STRING,
    returnDate: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BorrowedBook',
  });
  return BorrowedBook;
};