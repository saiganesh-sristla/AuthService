const { User, roles } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong at repository");
      throw error;
    }
  }

  async getByPk(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      console.log("something went wrong at repository");
      throw error;
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await roles.findOne({
        where: {
          name: "ADMIN",
        },
      });

      return user.hasRole(adminRole);

    } catch (error) {
      console.log("something went wrong at repository");
      throw error;
    }
  }
}

module.exports = UserRepository;
