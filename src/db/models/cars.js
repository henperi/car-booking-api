module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define(
    'Cars',
    {
      plateNumber: DataTypes.STRING,
      transmissionType: DataTypes.STRING,
      airConditioned: DataTypes.BOOLEAN,
      imageUrl: DataTypes.STRING,
      bookingPrice: DataTypes.BIGINT,
      extraDetails: DataTypes.ARRAY(DataTypes.STRING),
      modelName: DataTypes.STRING,
      rentalType: DataTypes.STRING,
    },
    {},
  );
  return Cars;
};
