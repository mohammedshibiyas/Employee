import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/addtask").post(controller.addTask);
router.route("/gettask").get(controller.getTask);
router.route("/getdetails/:id").post(controller.getDetails)
router.route("/deltask/:id").delete(controller.delTask);
// router.route("/edittask/:id").patch(controller.editTask); .
router.route("/editemp/:id").patch(controller.editEmployee)
export default router;