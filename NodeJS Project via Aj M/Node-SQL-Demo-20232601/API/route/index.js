const expressAPI = require('express');
const router = expressAPI.Router();

router.get('/', (req, res) => {
     res.status(202).json({
          message: 'Index route Available...'
     });
});

module.exports = router;