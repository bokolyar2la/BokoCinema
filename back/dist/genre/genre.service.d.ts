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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { MovieService } from 'src/movie/movie.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { ICollection } from './genre.interface';
import { GenreModel } from './genre.model';
export declare class GenreService {
    private readonly GenreModel;
    private readonly movieService;
    constructor(GenreModel: ModelType<GenreModel>, movieService: MovieService);
    bySlug(slug: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, GenreModel> & GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getAll(searchTerm?: string): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, GenreModel> & GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getCollections(): Promise<ICollection[]>;
    byId(_id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, GenreModel> & GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    update(_id: string, dto: CreateGenreDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, GenreModel> & GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    create(): Promise<import("mongoose").Types.ObjectId>;
    delete(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, GenreModel> & GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
