const express = require('express')
const router = express.Router();

// import page controller
const { Home, About, Contact } = require('../controllers/home.js')

// Home route
router.get('/', Home);

// About route
router.get('/about', About);

// Contact route
router.get('/contact', Contact);

// export default router
module.exports = router