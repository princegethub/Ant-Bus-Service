import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    console.log('file: ', file);
    const allowedFormats = ["jpg", "jpeg", "png", "pdf"];
    const fileExtension = file.mimetype.split("/")[1];
    if (!allowedFormats.includes(fileExtension)) {
      throw new Error("Unsupported file format. Use JPG, PNG, or PDF.");
    }
    return {
      folder: "Jalvardaan",
      format: fileExtension,
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    };
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    console.log('File received for upload:', file);
    cb(null, true);
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
});

export default upload;