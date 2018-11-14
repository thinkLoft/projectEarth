//require in models schema
const db = require('../models/export.js');
//create a simplified object from calling on database
module.exports = {
  //create a new user
  newUser: function(req, res) {
    db.Book.create({ userEmail: req.body, name: req.body })
      .then(dbModel => res.json(dbModel + ' Sucess'))
      .catch(err => res.status(422).json(err + ' Sorry, something went wrong'));
  }
};
