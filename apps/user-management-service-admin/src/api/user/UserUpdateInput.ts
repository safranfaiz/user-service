import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TokenUpdateManyWithoutUsersInput } from "./TokenUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  tokens?: TokenUpdateManyWithoutUsersInput;
  username?: string;
  userRoles?: string | null;
};
