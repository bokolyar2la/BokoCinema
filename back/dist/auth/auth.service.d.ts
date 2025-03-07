import { JwtService } from '@nestjs/jwt';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserModel } from 'src/user/user.model';
import { AuthDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refreshToken.dto';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: ReturnModelType<typeof UserModel>, jwtService: JwtService);
    login(dto: AuthDto): Promise<{
        refreshToken: string;
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            isAdmin: boolean;
        };
    }>;
    getNewTokens({ refreshToken }: RefreshTokenDto): Promise<{
        refreshToken: string;
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            isAdmin: boolean;
        };
    }>;
    register(dto: AuthDto): Promise<{
        refreshToken: string;
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            isAdmin: boolean;
        };
    }>;
    validateUser(dto: AuthDto): Promise<UserModel>;
    issueTokenPair(userId: string): Promise<{
        refreshToken: string;
        accessToken: string;
    }>;
    returnUserFields(user: UserModel): {
        _id: import("mongoose").Types.ObjectId;
        email: string;
        isAdmin: boolean;
    };
    findByEmail(email: string): Promise<UserModel | null>;
}
