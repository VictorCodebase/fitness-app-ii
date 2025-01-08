
const getAnalysis = async (text: string) => {
    const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            prompt: text,
            max_tokens: 100,
        }),
    });
    const data = await response.json();
    return data.choices[0].text;
}

const generatePrompt = (data: object) => {
    let prompt = "The following is a conversation with an AI assistant about your health.\n\n";
    for (const key in data) {
        prompt += `${key}: ${data[key]}\n`;
    }
    prompt += "\nAI: ";
    return prompt;
}

export default getAnalysis;