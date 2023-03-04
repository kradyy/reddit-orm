
// import { __prod__ } from "./constants";
// import { entityManager } from "./orm";
// import { Post } from "./entities/Post";
import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from "./resolvers/hello";

const main = async () => {    
    // Form a new entity manager
    // const em = await entityManager();

    // const post = em.create(Post, {title: 'my first post'});
    // await em.persistAndFlush(post);

    // em.find(Post, { }).then((posts) => {
    //     console.log(posts);
    // });

   
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        })
    })

    await apolloServer.start()
    
    apolloServer.applyMiddleware({ app })

    console.log('apolloServer', apolloServer)

    app.listen(4000, () => {
        console.log('Server started on localhost:4000');
    })
}

main().catch((error) => {
    console.error(error);
})