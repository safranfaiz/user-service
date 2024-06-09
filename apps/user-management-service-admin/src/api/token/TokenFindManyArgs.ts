import { TokenWhereInput } from "./TokenWhereInput";
import { TokenOrderByInput } from "./TokenOrderByInput";

export type TokenFindManyArgs = {
  where?: TokenWhereInput;
  orderBy?: Array<TokenOrderByInput>;
  skip?: number;
  take?: number;
};
