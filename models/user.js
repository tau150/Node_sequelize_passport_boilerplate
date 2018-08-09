const errors = require("../errors");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
          this.setDataValue("email", val.trim());
        },
        validate: {
          isEmail: true
        }
      },
      img: {
        type: DataTypes.STRING
      },
      role_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Roles"
          },
          key: "id"
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE
    },
    {
      paranoid: true,
      underscored: true
    }
  );
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role, {
      foreignKey: "role_id"
    });
  };

  User.createModel = user => {
    return User.create(user).catch(err => {
      if (err.name === "SequelizeUniqueConstraintError") {
        throw errors.validationError("email");
      } else {
        throw errors.savingError(err.errors);
      }
    });
  };

  User.prototype.toAuthJSON = function() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role_id,
      token: this.generateJWT(),
      image: this.image
    };
  };

  User.prototype.generateJWT = function() {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        id: this.id,
        email: this.email,
        role_id: this.role_id,
        exp: parseInt(exp.getTime() / 1000)
      },
      process.env.SEED_TOKEN
    );
  };

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.dataValues.password);
  };

  return User;
};
