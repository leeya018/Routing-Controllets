import "reflect-metadata";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";
import {CategoryController} from "./controllers/CategoryController";
import {PostController} from "./controllers/PostController";
import {UsersController} from './controllers/UsersController'
/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
const expressApp = createExpressServer({
    /**
     * We can add options about how routing-controllers should configure itself.
     * Here we specify what controllers should be registered in our express server.
     */
    routePrefix: "/api",
    controllers: [
        CategoryController,
        PostController,
        UsersController
    ]
});

/**
 * Start the express app.
 */
expressApp.listen(3000);

console.log("Server is up and running at port 3000");