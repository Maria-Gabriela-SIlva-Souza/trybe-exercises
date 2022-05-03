const { DataTypes } = require('sequelize');

const Atributtes = {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  pageQuantity: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

module.exports = (sequelize) => {
  const Books = sequelize.define('Books', 
    Atributtes,
    {
      timestamps: false,
      tableName: 'Books',
    }
  );

  return Books;
};