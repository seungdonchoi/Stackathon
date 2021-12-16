const router = require('express').Router();

module.exports = router;

router.get('/', (req, res, next) => {
  try {
    res.send('Hello from places');
  } catch (error) {
    next(error);
  }
})
