import { isBefore } from 'date-fns';
import Sequelize, { Model } from 'sequelize';

class Booking extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        location: Sequelize.STRING,
        date: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, new Date());
          },
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Subscription, { foreignKey: 'booking_id' });
    this.belongsTo(models.File, { foreignKey: 'file_id', as: 'file' }); // ERROR
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Booking;
