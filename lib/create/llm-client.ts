import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generatePlaylist(prompt: string) {
  const chatCompletion = await getGroqChatCompletion(prompt);
  // console.log(chatCompletion.choices[0]?.message?.content || "");
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(prompt: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Generate a playlist in JSON format as an array of objects of song and artist. The playlist is described by the following:",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
    response_format: {
      type: "json_object",
    },
    stream: false,
  });
}
