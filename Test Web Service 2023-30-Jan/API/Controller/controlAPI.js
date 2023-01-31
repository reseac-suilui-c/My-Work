// all functions;

exports.apiCallGet = function () {
     return function (req, res, next) {
          console.log(req.query);
          var resultAdd = req.query.A + req.query.B
          req.add = resultAdd

          var resultSub = req.query.A - req.query.B
          req.sub = resultSub

          var sumResult = resultAdd + resultSub
          req.sumR = sumResult

          next()
     }
}

exports.apiCallPost = function () {
     return function (req, res, next) {
          console.log(req.body);
          var resultAdd = req.body.A + req.body.B
          req.add = resultAdd

          var resultSub = req.body.A - req.body.B
          req.sub = resultSub

          var sumResult = resultAdd + resultSub
          req.sumR = sumResult

          next()
     }
}