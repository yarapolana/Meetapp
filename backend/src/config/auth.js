require('dotenv/config');

export default {
  secret: process.env.AUTH_SECRET,
  expires: '7d',
};
