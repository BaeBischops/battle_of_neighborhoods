import { express } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import {configuration, OpenAIApi} from "openai";

dotenv.config();

const configuration = new configuration({
    apikey: process.env.OPENAI_API_KEY,
});

//instance of openai
const openai = new OpenAIApi(configuration);

//initializing the express application
const app = express();
app.use(cors());
app.use(express.json());

