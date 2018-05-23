exports.post = (req, res) => res.send(JSON.stringify({req: {method :req.method, params : req.params, query :req.query}}));
exports.get = (req, res) => res.send(JSON.stringify({req: {method :req.method, params : req.params, query :req.query}}));
