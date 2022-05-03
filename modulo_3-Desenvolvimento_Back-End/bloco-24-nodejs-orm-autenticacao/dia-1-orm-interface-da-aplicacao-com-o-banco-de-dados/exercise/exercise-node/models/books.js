const { DataTypes } = require('sequelize');

const Atributtes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  pageQuantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
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