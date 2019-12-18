import * as Yup from 'yup';
import { Op } from 'sequelize';
import { isBefore, startOfDay, endOfDay, parseISO } from 'date-fns';

import Booking from '../models/Booking';
import File from '../models/File';
import User from '../models/User';

class BookingController {
  async index(req, res) {
    const where = {};
    const page = req.query.page || 1;

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);

      where.date = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }

    const bookings = await Booking.findAll({
      where,
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
      limit: 10,
      offset: (page - 1) * 10,
      order: [['date', 'ASC']],
    });

    const total_pages = Math.ceil(bookings.count / 10);

    return res.json({ total_pages, ...bookings });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      file_id: Yup.number().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Unable to validate information' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Unable to book ' });
    }

    const user_id = req.userId;

    const booking = await Booking.create({ ...req.body, user_id });

    return res.json(booking);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      file_id: Yup.number(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Could not validate user' });
    }

    // const user_id = req.userId;

    const booking = await Booking.findByPk(req.params.id);

    if (!booking) {
      return res.status(400).json({ error: 'Unable to find booking', booking });
    }

    if (booking.user_id !== req.userId) {
      return res.status(401).json({ error: 'User not authorized.' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'This booking date is invalid' });
    }

    if (booking.past) {
      return res.status(400).json({ error: 'Unable to update past bookings.' });
    }

    await booking.update(req.body);

    return res.json(booking);
  }

  async delete(req, res) {
    const user_id = req.userId;

    const booking = await Booking.findByPk(req.params.id);

    if (booking.user_id !== user_id) {
      return res.status(401).json({ error: 'Not authorized.' });
    }

    if (booking.past) {
      return res.status(400).json({ error: 'Unable to delete past bookings.' });
    }

    await booking.destroy();

    return res.send({ message: 'Booking deleted.' });
  }

  async one(req, res) {
    try {
      const { id } = req.params;

      const meetup = await Booking.findOne({
        where: { id },
        attributes: ['id', 'title', 'description', 'date', 'past', 'location'],
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['id', 'name'],
          },
          {
            model: File,
            as: 'file',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });

      if (meetup === null) {
        return res.status(400).json({ error: 'Meetup id invalid' });
      }

      return res.json(meetup);
    } catch (err) {
      return res.status(500).json({ error: 'Server error' });
    }
  }
}

export default new BookingController();
