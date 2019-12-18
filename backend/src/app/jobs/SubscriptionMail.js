import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { booking, user } = data;

    await Mail.sendMail({
      to: `${booking.User.name} <${booking.User.email}>`,
      subject: `[${booking.title}] New subscription`,
      template: 'subscription',
      context: {
        organizer: booking.User.name,
        booking: booking.title,
        user: user.name,
        email: user.email,
      },
    });
  }
}

export default new SubscriptionMail();
