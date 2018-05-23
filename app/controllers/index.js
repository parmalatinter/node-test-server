const utility = require("../libs/utility");

exports.post = (req, res) => res.render('pages/index', utility.set_options(req));
exports.get = (req, res) => res.render('pages/index',utility.set_options(req));