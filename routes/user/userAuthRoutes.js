const express = require("express");
const router = new express.Router();
const userUpload = require("../../multerconfig/user/userStorageConfig")
const userController = require("../../controllers/user/userControllers")
const userauthenticate = require("../../middleware/user/userauthenticate")
const adminauthenticate = require("../../middleware/admin/adminauthenticate")


// user Auth routes 
router.post("/register",userUpload.single("userprofile"),userController.userRegister)
router.post("/login",userController.login)

// logout && verify 

router.get("/userloggedin",userauthenticate,userController.userverify)

router.get("/logout",userauthenticate,userController.logout)


// forgot password

router.post("/forgotpassword",userController.forgotpassword)

// user verify for forgotpassword

router.get("/forgotpassword/:id/:token",userController.forgotpasswordverify)

//reset password 

router.put("/resetpassword/:id/:token",userController.resetpassword)

// for contact api
router.post("/usercontact",userauthenticate,userController.userContact);

// for admin dashboards 

router.get("/getAlluser",adminauthenticate,userController.getAlluser);
router.delete("/userdelete/:userid",adminauthenticate,userController.userDelete);


module.exports = router;
