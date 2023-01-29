module.exports = (sequelize, Sequelize) => {
  const Lead = sequelize.define("lead", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    leadname: {
      type: Sequelize.STRING,
    },
    source: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    assigned: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
      Enumerator: ["accepted", "pending", "contacted", "declined"],
    },
  });

  return Lead;
};
