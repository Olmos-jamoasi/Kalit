import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: "users" })
export class Users extends BaseEntity {
  @Column({ type: "varchar", nullable: false })
  passwordSalt: string;

  @Column({ type: "varchar", nullable: false })
  passwordVerifier: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;
}
