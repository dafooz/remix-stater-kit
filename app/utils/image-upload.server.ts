import cloudinary, {
  UploadApiErrorResponse,
  UploadApiOptions,
  UploadApiResponse,
} from 'cloudinary';
import type { Stream } from 'stream';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImage(
  fileStream: Stream,
  options?: UploadApiOptions,
): Promise<UploadApiResponse | UploadApiErrorResponse> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(options, (error, result) => {
      if (result) {
        return resolve(result);
      }
      reject(error);
    });
    fileStream.pipe(uploadStream);
  });
}

export { uploadImage };
