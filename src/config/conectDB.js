//copy từ sequelize

const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const sequelize = new Sequelize("learnbe", "root", null, {
  //Tên db, tên, mật khẩu
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  //async : Bất đồng bộ
  try {
    await sequelize.authenticate(); // cần tg để trả ra kqua
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
