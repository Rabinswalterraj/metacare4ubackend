"use strict";
const { convertDateTimeFormat } = require("@utils/date_time_helper");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Testimonial extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Testimonial.init(
        {
            testimonial_content: DataTypes.STRING,
            author: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Testimonial",
            tableName: "testimonials",
            underscored: true,
        }
    );
    return Testimonial;
};
