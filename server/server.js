import { express } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import {configuration, OpenAI} from "openai";

dotenv.config();

const configuration = new configuration({
    apikey: process.env.OPENAI_API_KEY,
});