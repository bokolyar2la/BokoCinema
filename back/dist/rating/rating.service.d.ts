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
import { MovieService } from 'src/movie/movie.service';
import { ModelType } from 'typegoose';
import { SetRatingDto } from './dto/set-rating.dto';
import { RatingModel } from './rating.model';
export declare class RatingService {
    private readonly RatingModel;
    private readonly MovieService;
    constructor(RatingModel: ModelType<RatingModel>, MovieService: MovieService);
    getMovieValueByUser(movieId: Types.ObjectId, userId: Types.ObjectId): Promise<number>;
    averageRatingByMovie(movieId: Types.ObjectId | string): Promise<number>;
    setRating(userId: Types.ObjectId, dto: SetRatingDto): Promise<import("mongoose").Document<unknown, {}, import("typegoose").InstanceType<RatingModel>> & RatingModel & import("mongoose").Document<unknown, any, any> & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
