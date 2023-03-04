import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants";
import ormConfig from "./mikro-orm.config";

const init = async () => {
    const instance = await MikroORM.init(ormConfig);

    // Run migrations
    await instance.getMigrator().up();

    // Return the instance
    return instance; 
}

const entityManager = async () => {
    const isntance = await init();
    return isntance.em.fork();
}

// Form a new entity manager
export { init, entityManager };