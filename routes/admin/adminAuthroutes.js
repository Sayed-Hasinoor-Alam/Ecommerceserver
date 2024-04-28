const express = require('express')
const router = new express.Router();
const adminAuthcontroller = require('../../controllers/admin/adminControllers')
const adminUpload = require('../../multerconfig/admin/adminStorageConfig')
const adminauthincate = require('../../middleware/admin/adminauthenticate')
// admin auth routes

router.post("/register",adminUpload.single("admin_profile"),adminAuthcontroller.Register);
router.post("/login",adminAuthcontroller.Login)
router.get("/logout",adminauthincate,adminAuthcontroller.Logout)



// admin verify
router.get("/adminverify",adminauthincate,adminAuthcontroller.AdminVerify);


module.exports = router;


