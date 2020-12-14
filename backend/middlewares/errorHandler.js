const errorHandler = (err, req, res, next) => {
    res.json({'message': err.message})
    console.log(err.message, err.code);
}

module.exports = errorHandler