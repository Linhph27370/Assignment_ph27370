import express from "express";
import {create,getAll,update,remove,getDetail} from "../controllers/product.js";
// import { checkPermission } from "../middleware/checkPermission.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/add", create);
router.put("/update/:id", update);
router.delete("/:id", remove);

export default router;