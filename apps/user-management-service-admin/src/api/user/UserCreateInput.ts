import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TokenCreateNestedManyWithoutUsersInput } from "./TokenCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  tokens?: TokenCreateNestedManyWithoutUsersInput;
  username: string;
  userRoles?: string | null;
};
