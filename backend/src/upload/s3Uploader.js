/**
 * S3 / Cloud file uploader — placeholder.
 *
 * Move image and video upload handling here rather than
 * storing assets in the Git repository.
 *
 * For implementation, consider:
 * - Multer for multipart form parsing
 * - @aws-sdk/client-s3 for S3 uploads
 * - Cloudinary SDK for image optimization + CDN
 */

// import multer from 'multer';
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

/**
 * Upload a file buffer to cloud storage.
 * @param {Buffer} buffer - File buffer
 * @param {string} fileName - Desired file name
 * @param {string} mimeType - MIME type
 * @returns {Promise<string>} Public URL of the uploaded file
 */
export const uploadFile = async (buffer, fileName, mimeType) => {
  // TODO: Implement cloud upload
  throw new Error('Upload not configured. Set up S3 or Cloudinary credentials.');
};

export default { uploadFile };
