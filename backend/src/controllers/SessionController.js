// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
  // Cria uma sessão
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};