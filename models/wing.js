module.exports = function(sequelize, DataTypes) {
    var Wing = sequelize.define("Wing", {
      wings_name: DataTypes.STRING,
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Wing;
  };