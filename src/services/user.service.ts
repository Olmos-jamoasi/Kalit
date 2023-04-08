import { Users } from "../database/entities/user.entity";
import { dataSource } from "../database/connection";

const usersRepository = dataSource.getRepository(Users);

export async function getUsers() {
  try {
    return await usersRepository.find();
  } catch (err) {
    throw err;
  }
}
