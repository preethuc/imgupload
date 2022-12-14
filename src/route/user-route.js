import express from "express";
const router = express.Router();

import { imageUpload,getNameByCharacter } from "./../controller/user-controller";
import upload from "./../utils/multer";

router.route("/img").post(upload.single("image"), imageUpload);
router.route('/spl').get(getNameByCharacter)


module.exports = router;
