// Require express, cors, dotenv, and routes
const fs = require("fs");
const dotenv = require("dotenv");
const tokenizer = require("wink-tokenizer");
const myTokenizer = tokenizer();
myTokenizer.defineConfig( { quoted_phrase: true } );
dotenv.config();
const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const lds_input = fs.readFileSync("lds_input.txt", "utf8")
// OpenAI API key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

// App uses cors and json and urlencoded middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// App routes
app.get("/translate", async (req, res) => {
    if(!req.query.text) return res.status(400).send("Missing text parameter");
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "system", content: lds_input}, {role: "assistant", content: "Entendido, a partir de ahora responderé en LSM. Por favor, proporciona la oración que deseas traducir."}, {role: "user", content: "\"" + req.query.text + "\""}],
            temperature: 0.5
        
        });
        res.status(response.status).send({
            message: myTokenizer.tokenize(response.data.choices[0].message.content).filter(word => word.tag !== "punctuation" && word.tag !== "alien"),
            status: response.status,
        });
    } catch (error) {
        res.status(501).send({
            message: "The server didn't respond or there are too many requests. Please try again later.",
            status: 501
        })
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});
