const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/diner', userRoutes);

module.exports = router;
