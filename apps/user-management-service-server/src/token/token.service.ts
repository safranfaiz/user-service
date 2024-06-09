import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TokenServiceBase } from "./base/token.service.base";

@Injectable()
export class TokenService extends TokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
