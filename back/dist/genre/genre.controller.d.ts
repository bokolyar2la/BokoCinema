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
import { CreateGenreDto } from './dto/create-genre.dto';
import { GenreService } from './genre.service';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    bySlug(slug: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, import("./genre.model").GenreModel> & import("./genre.model").GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getCollections(): Promise<import("./genre.interface").ICollection[]>;
    getAll(searchTerm?: string): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, import("./genre.model").GenreModel> & import("./genre.model").GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    get(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, import("./genre.model").GenreModel> & import("./genre.model").GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    create(): Promise<import("mongoose").Types.ObjectId>;
    update(id: string, dto: CreateGenreDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, import("./genre.model").GenreModel> & import("./genre.model").GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>> & import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, import("./genre.model").GenreModel> & import("./genre.model").GenreModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
