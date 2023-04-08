import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "users" })
export class Users extends BaseEntity {
  @Column({ name: "varchar", nullable: false })
  passwordSalt: string;

  @Column({ name: "varchar", nullable: false })
  passwordVerifier: string;
}
