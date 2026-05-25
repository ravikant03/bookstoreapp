import express from "express";
import {
    createBook,
    deleteBook,
    getBook,
    getBookById,
    updateBook,
} from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
