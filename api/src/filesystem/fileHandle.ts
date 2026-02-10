// utils/FileHandler.ts
import { Request } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

import { fileURLToPath } from "url";
      //  fetch path of protocol  file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const folderPath = path.join(__dirname, "productimages");

//source

//file:///home/nader/Pictures/  absolute path

export default class FileHandler {
  private destination: string;
  private upload: multer.Multer;



  constructor(destination: string = folderPath) {
    this.destination = destination;
    fs.mkdirSync(this.destination, { recursive: true });

    const storage = multer.diskStorage({
      destination: this.destination,
      filename: (_req: Request, file: any, cb: any) => {
        // const ext = path.extname(file.originalname);

        //  const filename = `${Date.now()}-${Math.random().toString(36)}${ext}`;
      
      //  cb(null, filename );

        cb(null,file.originalname)
      },
    });

    this.upload = multer({ storage });
  }

  // Middleware for routes
  public uploadMiddlewareImage(name :string  =""): any {
    return this.upload.single(name); 
  }



  // Get full path of file
  public getFilePath(filename: string) {
    return path.join(this.destination, filename);
  }

  // Delete file
  public async removeFile(filename: string):Promise<void> {
    const filePath = this.getFilePath(filename);
    fs.unlink(filePath, (err) => {
      if (err) console.error("Failed to delete file:", err);
    });
  }

  // Save a file object (from multer)
  public async save(file: Express.Multer.File):Promise<any> {
    return {
      filename: file.filename,
      path: this.getFilePath(file.filename),
    };
  }


  public async update(oldFilename: string, file: Express.Multer.File):Promise<any> {
    // Remove old file
    await this.removeFile(oldFilename);
    // Save new file
    return this.save(file);
  }




public static async  getAllImages() {
  try {
    const files = fs.readdirSync(folderPath);

    const images = files.filter(file =>
      /\.(jpg|jpeg|png|gif|avif)$/i.test(file)
    );

    return images;
  } catch (error) {
    console.error("Error reading images:", error);
    return [];
  }
}
}
