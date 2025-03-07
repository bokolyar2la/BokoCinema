"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const movie_service_1 = require("../movie/movie.service");
const genre_model_1 = require("./genre.model");
let GenreService = class GenreService {
    constructor(GenreModel, movieService) {
        this.GenreModel = GenreModel;
        this.movieService = movieService;
    }
    async bySlug(slug) {
        const doc = await this.GenreModel.findOne({ slug }).exec();
        if (!doc)
            throw new common_1.NotFoundException('Genre not found');
        return doc;
    }
    async getAll(searchTerm) {
        let options = {};
        if (searchTerm) {
            options = {
                $or: [
                    {
                        name: new RegExp(searchTerm, 'i'),
                    },
                    {
                        slug: new RegExp(searchTerm, 'i'),
                    },
                    {
                        description: new RegExp(searchTerm, 'i'),
                    },
                ],
            };
        }
        return this.GenreModel.find(options)
            .select('-updatedAt -__v')
            .sort({ createdAt: 'desc' })
            .exec();
    }
    async getCollections() {
        const genres = await this.getAll();
        const collections = await Promise.all(genres.map(async (genre) => {
            const moviesByGenre = await this.movieService.byGenres([genre.id]);
            const result = {
                _id: String(genre._id),
                image: moviesByGenre.length > 0
                    ? moviesByGenre[0].bigPoster
                    : 'default-image-url',
                slug: genre.slug,
                title: genre.name,
            };
            return result;
        }));
        return collections;
    }
    async byId(_id) {
        const genre = await this.GenreModel.findById(_id);
        if (!genre)
            throw new common_1.NotFoundException('Genre not found');
        return genre;
    }
    async update(_id, dto) {
        const updateDoc = await this.GenreModel.findByIdAndUpdate(_id, dto, {
            new: true,
        }).exec();
        if (!updateDoc)
            throw new common_1.NotFoundException('Genre not found');
        return updateDoc;
    }
    async create() {
        const defaultValue = {
            name: '',
            slug: '',
            description: '',
            icon: '',
        };
        const genre = await this.GenreModel.create(defaultValue);
        return genre._id;
    }
    async delete(id) {
        const deleteDoc = await this.GenreModel.findByIdAndDelete(id).exec();
        if (!deleteDoc)
            throw new common_1.NotFoundException('Genre not found');
        return deleteDoc;
    }
};
GenreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(genre_model_1.GenreModel)),
    __metadata("design:paramtypes", [Object, movie_service_1.MovieService])
], GenreService);
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map