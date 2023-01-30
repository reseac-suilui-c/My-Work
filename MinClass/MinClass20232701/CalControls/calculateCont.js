// GET
exports.getAdd = function () {
     return function (req, res, next) {
          var resultsAdd = req.query.x + req.query.y;
          req.addCal = resultsAdd;
          next();
     };
}

exports.getSubtraction = function () {
     return function (req, res, next) {
          var resultsSub = req.query.x - req.query.y;
          req.subCal = resultsSub;
          next();
     };
}

exports.getMultiply = function () {
     return function (req, res, next) {
          var resultsMultiply = req.query.x / req.query.y;
          req.multiplyCal = resultsMultiply;
          next();
     };
}

// POST
exports.postAdd = function () {
     return function (req, res, next) {
          var resultsAdd = req.body.x + req.body.y;
          req.addCal = resultsAdd;
          next();
     };
}

exports.postSubtraction = function () {
     return function (req, res, next) {
          var resultsSub = req.body.x - req.body.y;
          req.subCal = resultsSub;
          next();
     };
}

exports.postMultiply = function () {
     return function (req, res, next) {
          var resultsMultiply = req.body.x / req.body.y;
          req.multiplyCal = resultsMultiply;
          next();
     };
}