const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/', thoughtRoutes);
router.use('/', userRoutes);

module.exports = router;
