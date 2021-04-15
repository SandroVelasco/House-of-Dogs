const { Router } = require("express");
const express = require("express");
const router = express.Router();
const appController = require("./../controllers/AppController");
const authController = require("./../controllers/AuthController");
const Middleware = require("./../controllers/Middleware");
const db = require("./../models/db/db");

/**
 * App Controller
 */
router.get("/", Middleware.sessionCheck, appController.index);
router.get("/home", Middleware.sessionAppCheck, appController.home);
router.get("/customer", Middleware.sessionAppCheck, appController.customer);

/**
 * Auth Controller 
 */
router.post("/login", authController.login);

module.exports = router;