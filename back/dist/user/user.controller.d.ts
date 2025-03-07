import { Types } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(_id: string): Promise<import("@typegoose/typegoose").DocumentType<UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    updateProfile(_id: string, dto: UpdateUserDto): Promise<void>;
    getFavorites(_id: Types.ObjectId): Promise<import("@typegoose/typegoose").Ref<import("../movie/movie.model").MovieModel, Types.ObjectId>[]>;
    toggleFavorite(movieId: Types.ObjectId, user: UserModel): Promise<void>;
    getCountUsers(): Promise<number>;
    getUsers(searchTerm?: string): Promise<import("@typegoose/typegoose").DocumentType<UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getUser(id: string): Promise<import("@typegoose/typegoose").DocumentType<UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    updateUser(id: string, dto: UpdateUserDto): Promise<void>;
    deleteUser(id: string): Promise<import("@typegoose/typegoose").DocumentType<UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
}
