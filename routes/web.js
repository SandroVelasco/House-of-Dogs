const express = require("express");
const router = express.Router();
/* Controllers */
const appController = require("./../controllers/AppController");
const authController = require("./../controllers/AuthController");
const { IndexController, indexRoutes } = require("./../controllers/IndexController");
/* Middleware */
const Middleware = require("./../controllers/Middleware");
/* Models */
const db = require("./../models/db/db");

/**
 * Middleware for routes
 */
router.use(indexRoutes, IndexController.checkIfIsLogged);

/**
 * App Controller
 */
router.get("/", IndexController.index);
router.get("/home", Middleware.sessionAppCheck, appController.home);
router.get("/customer", Middleware.sessionAppCheck, appController.customer);

/**
 * Auth Controller 
 */
router.post("/login", authController.login);

module.exports = router;