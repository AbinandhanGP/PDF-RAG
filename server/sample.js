import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

async function test() {
    try {
        const embeddings = new GoogleGenerativeAIEmbeddings({
            model: "gemini-embedding-001",
            apiKey: "AIzaSyBcLw6rNZuKKGNgXts6KfyW31C01sqbAQk",
        });

        const result = await embeddings.embedQuery("hello world");
        console.log("✅ Embedding works!");
        console.log(result.length); // should be 768
    } catch (err) {
        console.error("❌ Error:", err);
    }
}

test();