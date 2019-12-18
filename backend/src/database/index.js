import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

import { Booking, File, Subscription, User } from '../app/models';

const models = [Booking, File, Subscription, User];

class Database {
  constructor() {
    this.init();
    this.associate();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_HOST, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
