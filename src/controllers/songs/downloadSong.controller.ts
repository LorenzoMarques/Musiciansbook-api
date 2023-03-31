import { Request, Response } from "express";

const getSongController = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    res.download(`src/songs/${name}`);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default getSongController;
