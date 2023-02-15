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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
let Author = class Author {
    constructor(name, email) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.termsAccepted = false;
        this.books = new Collection(this);
        this.friends = new Collection(this);
        this.name = name;
        this.email = email;
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", typeof (_a = typeof ObjectId !== "undefined" && ObjectId) === "function" ? _a : Object)
], Author.prototype, "_id", void 0);
__decorate([
    SerializedPrimaryKey(),
    __metadata("design:type", String)
], Author.prototype, "id", void 0);
__decorate([
    Property(),
    __metadata("design:type", Object)
], Author.prototype, "createdAt", void 0);
__decorate([
    Property({ onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], Author.prototype, "updatedAt", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Author.prototype, "email", void 0);
__decorate([
    Property(),
    __metadata("design:type", Number)
], Author.prototype, "age", void 0);
__decorate([
    Property(),
    __metadata("design:type", Object)
], Author.prototype, "termsAccepted", void 0);
__decorate([
    Property(),
    __metadata("design:type", Array)
], Author.prototype, "identities", void 0);
__decorate([
    Property(),
    __metadata("design:type", Date)
], Author.prototype, "born", void 0);
__decorate([
    OneToMany(() => Book, book => book.author),
    __metadata("design:type", Object)
], Author.prototype, "books", void 0);
__decorate([
    ManyToMany(),
    __metadata("design:type", Object)
], Author.prototype, "friends", void 0);
__decorate([
    ManyToOne(),
    __metadata("design:type", typeof (_b = typeof Book !== "undefined" && Book) === "function" ? _b : Object)
], Author.prototype, "favouriteBook", void 0);
__decorate([
    Property({ version: true }),
    __metadata("design:type", Number)
], Author.prototype, "version", void 0);
Author = __decorate([
    Entity(),
    __metadata("design:paramtypes", [String, String])
], Author);
exports.Author = Author;
//# sourceMappingURL=Post.js.map