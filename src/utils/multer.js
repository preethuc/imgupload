import multer from "multer"

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {         
        cb(null, 'upload');
      
    },
    filename: (req, file, cb) => { 
      cb(null,file.originalname);
    }
  });
const upload = multer({ storage: fileStorage })
  

module.exports = upload