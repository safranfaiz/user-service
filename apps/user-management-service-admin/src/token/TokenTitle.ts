import { Token as TToken } from "../api/token/Token";

export const TOKEN_TITLE_FIELD = "token";

export const TokenTitle = (record: TToken): string => {
  return record.token?.toString() || String(record.id);
};
