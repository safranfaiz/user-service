import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenUpdateInput = {
  expiryDate?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
