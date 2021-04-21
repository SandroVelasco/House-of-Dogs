const express = require("express");
const router = express.Router();
/* Controllers */
const { AppController, appRoutes } = require("./../controllers/AppController");
const { AuthController, authRoutes } = require("./../controllers/AuthController");
const { IndexController, indexRoutes } = require("./../controllers/IndexController");
/* Middleware */
const Middleware = require("./../controllers/Middleware");
/* Models */
const db = require("./../models/db/db");

/**
 * Middleware for routes
 */
router.use([...indexRoutes, ...appRoutes], Middleware.checkSession);

/**
 * Index Controller
 */
router.get("/", IndexController.index);

/**
 * Auth Controller 
 */
router.post("/login", AuthController.login);

/**
 * App Controller
 */
router.get("/home", AppController.home);
router.get("/customer", AppController.customer);

module.exports = router;