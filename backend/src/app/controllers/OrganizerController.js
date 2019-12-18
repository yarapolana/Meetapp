import Booking from '../models/Booking';

class OrganizerController {
  async index(req, res) {
    const bookings = await Booking.findAll({ where: { user_id: req.userId } });

    return res.json(bookings);
  }
}

export default new OrganizerController();
