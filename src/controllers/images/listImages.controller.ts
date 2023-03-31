import { Request, Response } from "express";
import listImagesService from "../../services/images/listImages.service";

const listImagesController = async (req: Request, res: Response) => {
  const type_id = Number(req.params.type);
  try {
    const images = await listImagesService();

    return res.status(200).json(images);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default listImagesController;
