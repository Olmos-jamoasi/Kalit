import { Request, Response } from "express";
import { getUsers } from "../services";

export async function getAllUsers(_req: Request, res: Response) {
  const users = getUsers();
  return res.status(200).json({
    users,
  });
}
