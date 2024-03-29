import { Model } from 'sequelize';

class Subscription extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Booking, { foreignKey: 'booking_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Subscription;
