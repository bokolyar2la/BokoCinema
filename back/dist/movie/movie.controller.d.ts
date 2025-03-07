/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Types } from 'mongoose';
import { MovieService } from './movie.service';
import { UpdateMovieDto } from './update-movie.dto';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    bySlug(slug: string): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<import("./movie.model").MovieModel>> & import("./movie.model").MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    byActor(actorId: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<import("./movie.model").MovieModel>> & import("./movie.model").MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    byGenres(genreIds: Types.ObjectId[]): Promise<(import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<import("./movie.model").MovieModel>> & import("./movie.model").MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getAll(searchTerm?: string): Promise<(import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<import("./movie.model").MovieModel>> & import("./movie.model").MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getMostPopular(): Promise<(import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<import("./movie.model").MovieModel>> & import("./movie.model").MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    updateCountOpened(slug: string): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<import("./movie.model").MovieModel>> & import("./movie.model").MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    get(id: string): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<import("./movie.model").MovieModel>> & import("./movie.model").MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    create(): Promise<Types.ObjectId>;
    update(id: string, dto: UpdateMovieDto): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<import("./movie.model").MovieModel>> & import("./movie.model").MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    delete(id: string): Promise<void>;
}
