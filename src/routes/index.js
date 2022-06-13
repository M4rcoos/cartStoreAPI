import { Router } from "express";
import UserController from "../controllers/UserControllers/index.js";
import LoginController from "../controllers/LoginController/index.js";
import ProductController from "../controllers/ProductsControllers/index.js";

const routes = Router();

routes.post("/users", UserController.createUser);
routes.get("/users", UserController.getUsers);

routes.get("/users/:id", UserController.getUserById);

routes.post("/login", LoginController.createSession);

routes.post("/products/:user_id", ProductController.createProduct);
// routes.get("/products/:user_id", ProductController);
// routes.patch("/products/:user_id/:product_id", ProductController);
// routes.delete("/products/:user_id/:product_id", ProductController);

// routes.get("/products", ProductController);
// routes.get("/products/:product_id", ProductController);

// routes.post("/cart/:user_id");
// routes.get("/cart/:user_id");

// routes.get("/cart/:user_id/:cart_id");

export default routes;
