import { Role } from "../role/Role";
import { JsonValue } from "type-fest";
import { Token } from "../token/Token";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: Role | null;
  roles: JsonValue;
  tokens?: Array<Token>;
  updatedAt: Date;
  username: string;
  userRoles: string | null;
};
