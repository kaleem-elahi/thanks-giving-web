module.exports = (sequelize, Sequelize) => sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  from: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  to: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT(),
    allowNull: false,
  },
  colour: {
    type: Sequelize.STRING(56),
    allowNull: false,
  },
  deleted: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});
