"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orm_1 = require("./orm");
const Post_1 = require("./entities/Post");
const main = async () => {
    const em = await (0, orm_1.entityManager)();
    em.find(Post_1.Post, { title: "12345" }).then((posts) => {
        console.log(posts);
    });
};
main().catch((error) => {
    console.error(error);
});
//# sourceMappingURL=index.js.map