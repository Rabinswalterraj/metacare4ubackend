const express = require("express");
const router = express.Router();
const imageUploader = require("@utils/imageUploader");
// CONTROLLER ASSIGNMENTS
const {
    getSpecialist,
    getTherapists,
    bookAppointment,
    LoginProcess,
    UserRegisterProcess,
    CheckValideMail,
    otpVerification,
    passwordUpdate,
    GoogleUserRegisterProcess,
    SubscriptionPack,
    AddSlats,
    UserDetails,
    TherapistProfile,
    TherapistRegisterProcess,
    Banners,
    Testimonials,
    ProfileUpdate,
} = require("@controllers/AuthController");
// END CONTROLLER ASSIGNMENTS
// ROUTES START
router.get("/get_specialist",getSpecialist);
router.get("/get_therapists",getTherapists);
router.post("/book_appointment",bookAppointment);
router.post("/login",LoginProcess);
router.post("/register",UserRegisterProcess);
router.post("/google_register",GoogleUserRegisterProcess);
router.post("/check_valide_mail",CheckValideMail);
router.post("/otp_verification",otpVerification);
router.post("/update_password",passwordUpdate);
router.post("/subscription_packs",SubscriptionPack);
router.post("/add_slats",AddSlats);
router.post("/user_details",UserDetails)
router.post("/therapist_profile",TherapistProfile)
router.post("/therapist_register",TherapistRegisterProcess)
router.post("/banners",Banners)
router.post('/testimonials',Testimonials)
router.post('/update_profile',imageUploader.upload.single("profile"),ProfileUpdate)
// END ROUTES

module.exports = router;
