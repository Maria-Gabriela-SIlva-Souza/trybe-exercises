const { DataTypes } = require('sequelize');

const Atributtes = {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  pageQuantity: DataTypes.INTEGER,
  publisher: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

module.exports = (sequelize) => {
  const Books = sequelize.define('Books', 
    Atributtes,
    {
      timestamps: true,
      tableName: 'Books',
    }
  );

  return Books;
};