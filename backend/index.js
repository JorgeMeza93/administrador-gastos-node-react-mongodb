import express from "express";

const app = express();
const port = 4000;

// Routing
app.use("/", (req, res) => {
    res.send("Hola Mundo")
})

app.listen(port, () => {
    console.log("Hola MundO");
})