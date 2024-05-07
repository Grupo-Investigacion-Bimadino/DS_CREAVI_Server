import { IsNotEmpty, IsString, IsEmail} from 'class-validator';

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email' })
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsString()
    picture: string;

    @IsString()
    role: string;
}
