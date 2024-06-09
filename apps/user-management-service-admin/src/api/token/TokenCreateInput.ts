import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenCreateInput = {
  expiryDate?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
