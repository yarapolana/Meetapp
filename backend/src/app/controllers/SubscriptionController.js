import { Op } from 'sequelize';

import User from '../models/User';
import Booking from '../models/Booking';
import Subscription from '../models/Subscription';

import Queue from '../../lib/Queue';

import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Booking,
          as: 'booking',
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          required: true,
        },
      ],
      order: [[Booking, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const booking = await Booking.findByPk(req.params.id, {
      include: [User],
      as: 'user',
    });

    if (!booking) {
      return res.status(400).json({ error: 'Booking not found' });
    }

    if (booking.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: 'Unable to subscribe to you own bookings' });
    }

    if (booking.past) {
      return res
        .status(400)
        .json({ error: 'Unable to subscribe to past bookings' });
    }

    const checkDate = await Subscription.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Booking,
          required: true,
          where: {
            date: booking.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res.status(400).json({
        error: 'Unable to subscribe to two bookings at the same time',
      });
    }

    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id: booking.id,
    });

    await Queue.add(SubscriptionMail.key, {
      booking,
      user,
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const subscription = await Subscription.findByPk(req.params.id);

      if(!subscription){
        return res.status(400).json({ error: 'Subscription not found' });
      }

      if(subscription.user_id !== !req.userId){
        return res.status(401).json({
          error: "You don't have permission to cancel this subscription",
        })
      }

      if(subscription.past){
        
      }

    return res.send('Subscription canceled');
  }
}

export default new SubscriptionController();
