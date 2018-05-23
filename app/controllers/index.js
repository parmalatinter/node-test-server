exports.post = (req, res) => {
    res.render('pages/index', {req: {method :req.method, params : req.params, query :req.query}});
};

exports.get = (req, res) => {
    res.render('pages/index', {req: {method :req.method, params : req.params, query :req.query}});
};