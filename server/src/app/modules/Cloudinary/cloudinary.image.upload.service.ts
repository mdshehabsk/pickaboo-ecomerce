import cloudinary from './config';
import { v4 as uuidv4 } from 'uuid';
import { Express } from 'express';
import { UploadApiResponse } from 'cloudinary';


export const cloudinaryImageUpload = async (
  files: Express.Multer.File[],
  folder: string = 'pickaboo'
): Promise<UploadApiResponse[]> => {
  try {
    const uploadPromises = files.map((file) =>
      new Promise<UploadApiResponse>((resolve, reject) => {
        const originalName = file.originalname.split(' ').join('-');
        const extension = file.originalname.split('.').pop();
        const uniqueName = `${originalName}_${uuidv4()}.${extension}`;

        const uploadStream = cloudinary.uploader.upload_stream(
          { folder, public_id: uniqueName },
          (error, result) => {
            if (error) reject(error);
            else if (result) resolve(result);
          }
        );

        uploadStream.end(file.buffer);
      })
    );

    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    throw new Error(`Cloudinary upload failed: ${(error as Error).message}`);
  }
};
