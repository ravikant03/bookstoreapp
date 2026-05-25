import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createBook = async (req, res) => {
    try {
        const { name, price, image, description } = req.body;

        if (!name || price === undefined || !image || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const book = new Book({
            name,
            price,
            category: "Free",
            image,
            description,
        });

        await book.save();
        res.status(201).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, image, description } = req.body;

        if (!name || price === undefined || !image || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { name, price, category: "Free", image, description },
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
