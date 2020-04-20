module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      plateNumber: {
        type: Sequelize.STRING,
      },
      transmissionType: {
        type: Sequelize.STRING,
      },
      airConditioned: {
        type: Sequelize.BOOLEAN,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      bookingPrice: {
        type: Sequelize.BIGINT,
      },
      extraDetails: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      modelName: {
        type: Sequelize.STRING,
      },
      rentalType: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Cars');
  },
};
