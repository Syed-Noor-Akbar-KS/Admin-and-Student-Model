const express = require ('express');
const router = express ();

// const admin = require ('../controller/adminController');
const adminController = require ('../controller/adminController');
// console.log (adminController);

router.get ('/create', adminController.create);
router.get ('/detials', adminController.detials);
router.get ('/viewcourse', adminController.viewcourse);
router.get ('/student', adminController.viewstudent);

module.exports = router;
