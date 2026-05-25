import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

const startServer = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");

        const server = app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });

        server.on("error", (error) => {
            if (error.code === "EADDRINUSE") {
                console.log(`Port ${PORT} is already in use. Close the old server or use another PORT.`);
                return;
            }

            console.log("Server error:", error.message);
        });
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    }
};

startServer();
