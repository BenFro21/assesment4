const express = require("express");
const cors = require("cors");

const app = express();
// using cors middleware
app.use(cors());
//setting incomeing data to json 
app.use(express.json());
//bringing in the controller
const { getCompliment, getFortune, askQuestion, updateP, deleteMe } = require('./controller')

//routes 
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post('/api/question', askQuestion)
app.put('/api/:id', updateP)
app.delete('/api/:id', deleteMe)

app.listen(4000, () => console.log("Server running on 4000"));
