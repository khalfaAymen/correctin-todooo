module.exports = (connection, DataTypes) => {
  const Todo = connection.define(
    "Todo",
    {
      // Model attributes are defined here
      title:{
          type:DataTypes.STRING,
          allowNull:false
      },
      description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isComplete:{
      type:DataTypes.BOOLEAN,
      default:false
  }
    },
    
    {
      // Other model options go here
    }
  );
  return Todo;
};
