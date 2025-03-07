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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetRatingDto = void 0;
const class_validator_1 = require("class-validator");
const class_validator_mongo_object_id_1 = require("class-validator-mongo-object-id");
const mongoose_1 = require("mongoose");
class SetRatingDto {
}
__decorate([
    (0, class_validator_mongo_object_id_1.IsObjectId)({ message: 'Movie Id is invalid' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], SetRatingDto.prototype, "movieId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SetRatingDto.prototype, "value", void 0);
exports.SetRatingDto = SetRatingDto;
//# sourceMappingURL=set-rating.dto.js.map