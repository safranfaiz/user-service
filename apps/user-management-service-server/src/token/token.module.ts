import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TokenModuleBase } from "./base/token.module.base";
import { TokenService } from "./token.service";
import { TokenController } from "./token.controller";
import { TokenResolver } from "./token.resolver";

@Module({
  imports: [TokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [TokenController],
  providers: [TokenService, TokenResolver],
  exports: [TokenService],
})
export class TokenModule {}
