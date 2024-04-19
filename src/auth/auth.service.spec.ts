import { Test, TestingModule} from "@nestjs/testing"
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../auth/schemas/user.schema";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { ConflictException, UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
    let authService: AuthService;
    let model: Model<User>;
    let jwtService: JwtService;

    const mockAuthService = {
        find: jest.fn(),
        create: jest.fn(),
        findById: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
        findOne: jest.fn(),
    }

    const mockUser = {        
        name: "newUser",
        email: "newUser@email.com",
        password: "12345678",
        role: "user",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date()
    } as User;

    let token = 'jwtToken';

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                JwtService,
                {
                    provide: getModelToken(User.name),
                    useValue: mockAuthService,
                }
            ],
        }).compile();
        
        authService = module.get<AuthService>(AuthService);
        model = module.get<Model<User>>(getModelToken(User.name));
        jwtService = module.get<JwtService>(JwtService);
    });

    it('should be defined', () => {
        expect(authService).toBeDefined();
    });

    describe('signUp', () => {
        const signUpDto = {                
            name: "newUser",
            email: "newUser@email.com",
            password: "12345678"
        }

        it('should return a new user', async () => {                        

            jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');
            jest.spyOn(model, 'create').mockImplementationOnce( () => Promise.resolve([mockUser]));


            jest.spyOn(jwtService, 'sign').mockReturnValue('jwtToken');

            const result = await authService.signUp(signUpDto);

            expect(bcrypt.hash).toHaveBeenCalled();
            expect(result).toEqual({ token })
        });

        it('should throw duplicate email entered', async () => {
            
            jest.spyOn(model, 'create').mockImplementationOnce( () => Promise.reject({code: 11000}));

            await expect(authService.signUp(signUpDto)).rejects.toThrow(ConflictException);
        });
    });

    describe('login', () => {
        const loginDto = {            
            email: "newUser@email.com",
            password: "12345678"
        }

        it('should login user and return the token', async () => {
            jest.spyOn(model, 'findOne').mockResolvedValueOnce(mockUser);
            jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true);
            jest.spyOn(jwtService, 'sign').mockReturnValue(token);

            const result = await authService.login(loginDto);

            expect(result).toEqual({ token });
        })

        it('should throw invalid email', async () => {
            jest.spyOn(model, 'findOne').mockResolvedValueOnce(null);

            expect(authService.login(loginDto)).rejects.toThrow(UnauthorizedException);
        });

        it('should throw invalid password', async () => {
            jest.spyOn(model, 'findOne').mockResolvedValueOnce(mockUser);
            jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(false);

            expect(authService.login(loginDto)).rejects.toThrow(UnauthorizedException);
        })
    });
      
});

