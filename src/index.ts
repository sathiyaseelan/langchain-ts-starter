import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import { PDFLoader } from "langchain/document_loaders";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";


dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_TOKEN,
});

const loader = new PDFLoader("src/document_loaders/example_data/example.pdf");

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 4000,
  chunkOverlap: 200,
});

const docs = await loader.loadAndSplit(splitter);

console.log(docs[1]);

// const res = await model.call(
//   "What's a good idea for an application to build with GPT-3?"
// );

// console.log(res);
