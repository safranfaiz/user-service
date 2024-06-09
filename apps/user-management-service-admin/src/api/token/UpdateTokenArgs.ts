import { TokenWhereUniqueInput } from "./TokenWhereUniqueInput";
import { TokenUpdateInput } from "./TokenUpdateInput";

export type UpdateTokenArgs = {
  where: TokenWhereUniqueInput;
  data: TokenUpdateInput;
};
