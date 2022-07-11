const { Router } = require("express");
const sign_up = require("../controllers/register");
const sign_in = require("../controllers/login");
const pick_up = require("../controllers/pickup");
const drop_off = require("../controllers/drop_off");
const get_user = require("../controllers/getclient");
const all_orders = require("../controllers/all_orders");
const order_picked = require("../controllers/order_picked");
const get_personal_orders = require("../controllers/getpersonal_orders");
const pickup_requests = require("../controllers/pickup_request");

//const passport = require("passport");
const router = Router();

//Post Routers
router.post("/signup", sign_up);
router.post("/signin", sign_in);
router.post("/addorder", pick_up);
router.post("/dropoff", drop_off);
//Suppose to be a put request will fix later
router.post("/pickup_order", order_picked);

//Get Routers
//router.get("/requests", pickup_requests);
router.get("/getUser", get_user);
router.get("/getPersonalOrders", get_personal_orders);
router.get("/allOrders", all_orders);

module.exports = router;
