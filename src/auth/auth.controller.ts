import { Controller, Logger } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

const logger = new Logger('AuthController');

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('validateToken')
  validateToken(token: string): Promise<any> {
    return this.authService.validateToken(token);
  }

  @MessagePattern('validateUser')
  validateUser(username: string): Promise<any> {
    logger.log(`Validating ${username}...`);
    return this.authService.validateUser(username);
  }

  @MessagePattern('signup')
  signup(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    logger.log(`${authCredentialsDto.username} has signed up.`);
    return this.authService.signUp(authCredentialsDto);
  }

  @MessagePattern('signin')
  signin(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{
    userId: number;
    username: string;
    accessToken: string;
    refreshToken: string;
  }> {
    logger.log(`${authCredentialsDto.username} signing in...`);
    return this.authService.signIn(authCredentialsDto);
  }

  @MessagePattern('refresh')
  refresh(
    username: string,
    refreshToken: string,
  ): Promise<{ accessToken: string }> {
    logger.log(`Refreshing token for ${username}`);
    return this.authService.refresh(username, refreshToken);
  }
}
