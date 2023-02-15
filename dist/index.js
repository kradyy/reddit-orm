"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        dbName: "lireddit",
        entities: [],
        type: "postgresql",
        user: 'postgres',
        password: 'postgres',
        debug: !constants_1.__prod__
    });
};
main();
//# sourceMappingURL=index.js.map