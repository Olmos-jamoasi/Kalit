import { Request, Response } from "express";
import { getUsers } from "../services";

export async function getAllUsers(_req: Request, res: Response) {
  try {
    const users = await getUsers();
    return res.status(200).json({
      users,
    });
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      err,
    });
  }
}
