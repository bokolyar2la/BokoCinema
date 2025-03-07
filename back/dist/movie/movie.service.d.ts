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
import { ModelType } from '@hasezoey/typegoose';
import { Types } from 'mongoose';
import { TelegramService } from 'src/telegram/telegram.service';
import { MovieModel } from './movie.model';
import { UpdateMovieDto } from './update-movie.dto';
export declare class MovieService {
    private readonly MovieModel;
    private readonly telegramService;
    constructor(MovieModel: ModelType<MovieModel>, telegramService: TelegramService);
    getAll(searchTerm?: string): Promise<(import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    bySlug(slug: string): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    byActor(actorId: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    byGenres(genreIds: Types.ObjectId[]): Promise<(import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getMostPopular(): Promise<(import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    updateCountOpened(slug: string): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    updateRating(id: Types.ObjectId, newRating: number): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    byId(_id: string): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(_id: string, dto: UpdateMovieDto): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    create(): Promise<Types.ObjectId>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, import("@hasezoey/typegoose").InstanceType<MovieModel>> & MovieModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    sendNotifications(dto: UpdateMovieDto): Promise<void>;
}
