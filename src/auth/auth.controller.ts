import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/singin.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('signup')
    signup(@Body() createUserDto : CreateUserDto): any{
        return this.authService.signup(createUserDto);
    }

    @Post('singin')
    singin(signinDto:SigninDto): any{
        
    }
}
