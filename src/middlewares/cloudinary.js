import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET,
} from "../config.js"; //claves

//setup
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

//subir archivos y guardarlos en la nube
export async function uploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "usuarios",
  });
}

export async function deleteImage(public_id) {
  return await cloudinary.uploader.destroy(public_id);
}
