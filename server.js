import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



// CRUD -- GET
app.get("/books", async(req, res) => {
    try {
      const result = "SELECT * FROM books_two ORDER BY id"; // ascending order 
      res.json(result.rows);
    } catch(err){
        console.error(err)
        return res.status(500).json({error: 'server error'})
    }
});

// // CRUD -- CREATE
app.post("/books", async(req, res) => {
    try {
      const result = "INSERT INTO books_two (id, title, author, public_date) VALUES ($1, $2, $3, $4) RETURNING *";
      [id, title, author, public_date]
    //   res.json(result.rows);
    } catch(err){
        // console.error(err)
        // return res.status(500).json({error: 'server error'})
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Backend Listening on ${port}.`)
});
