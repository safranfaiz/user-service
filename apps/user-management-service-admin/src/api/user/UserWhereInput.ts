import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { TokenListRelationFilter } from "../token/TokenListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  tokens?: TokenListRelationFilter;
  username?: StringFilter;
  userRoles?: StringNullableFilter;
};
