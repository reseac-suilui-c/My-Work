exports.calAdd = function () {
    return function (req, res, next) {
        console.log(req.query);
        var resultAdd = parseInt(req.query.a) + parseInt(req.query.b)
        req.add = resultAdd
        next()
    }
}

exports.calNegative = function () {
    return function (req, res, next) {
        var resultNegative = parseInt(req.query.a) - parseInt(req.query.b)
        req.total = req.add  - parseInt(req.query.a) - parseInt(req.query.b)
        req.negative = resultNegative
        next()
    }
}


exports.calAddPost = function () {
    return function (req, res, next) {
        console.log(req.body);
        var resultAdd = parseInt(req.body.a) + parseInt(req.body.b)
        req.add = resultAdd
        next()
    }
}

exports.calNegativePost = function () {
    return function (req, res, next) {
        var resultNegative = parseInt(req.body.a) - parseInt(req.body.b)
        req.total = req.add  - parseInt(req.body.a) - parseInt(req.body.b)
        req.negative = resultNegative
        next()
    }
}
