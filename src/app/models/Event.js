/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

class Event extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        localization: Sequelize.STRING,
        date: Sequelize.DATE,
        sales_date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, new Date());
          },
        },
        cancelable: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(new Date(), subHours(this.date, 24));
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'banner' });
    this.belongsTo(models.User, { foreignKey: 'promoter_id', as: 'promoter' });
  }
}

export default Event;
