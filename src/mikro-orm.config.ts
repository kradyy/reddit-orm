import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";

console.log("dirname", __dirname);

export default {
    migrations: {
      path: path.join(__dirname, "./migrations"),
      pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    dbName: "lireddit",
    entities: [Post],
    type: "postgresql",
    user: 'postgres',
    password: 'postgres',
    debug: !__prod__,
    port: 5433
  } as Parameters<typeof MikroORM.init>[0];