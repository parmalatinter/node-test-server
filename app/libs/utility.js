exports.set_body = (req) => JSON.stringify(
    {
        req:
            {
                method :req.method,
                params : req.params,
                query :req.query,
                body : req.body
            }
    }
);

exports.set_options = (req) => {
    return {
        req:
            {
                method :req.method,
                params : req.params,
                query :req.query,
                body : req.body
            }
    };
};