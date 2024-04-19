import { IsNotEmpty, IsString, IsEmail} from 'class-validator';

export class LoginDto {    
    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email' })
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
