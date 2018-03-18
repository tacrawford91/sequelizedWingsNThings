module.exports = function(sequelize, DataTypes) {
    var Wing = sequelize.define("Wing", {
      wings_name: DataTypes.STRING,
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: DataTypes.TIMESTAMP,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        field: 'createdAt'
      }
    });
    return Wing;
  };