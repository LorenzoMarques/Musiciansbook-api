import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import path from "path";
import { Request } from "express";
import { S3Client } from "@aws-sdk/client-s3";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const s3 = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID || "default",
    secretAccessKey: process.env.SECRET_ACCESS_KEY || "default",
  },
});

const imageStorage = multerS3({
  s3: s3,
  bucket: "musiciansbookimagesbucket",
  key: (req, file, cb) => {
    cb(null, Date.now().toString() + path.extname(file.originalname));
  },
});

const songStorage = multerS3({
  s3: s3,
  bucket: "musiciansbooksongsbucket",
  key: (req, file, cb) => {
    cb(null, Date.now().toString() + path.extname(file.originalname));
  },
});

const fileFilter = (req: Request, file: any, cb: any) => {
  const allowedMimes = ["image/jpeg", "image/png"];

  if (allowedMimes.includes((file as any).mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type."));
  }
};

const songFilter = (req: Request, file: any, cb: any) => {
  const allowedMimes = ["audio/mp3", "audio/mp4", "audio/mpeg"];

  if (allowedMimes.includes((file as any).mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type."));
  }
};

export const uploadImage = multer({
  storage: imageStorage,
  fileFilter: fileFilter,
});

export const uploadSong = multer({
  storage: songStorage,
  fileFilter: songFilter,
});
