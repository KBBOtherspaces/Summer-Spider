import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Call your fine-tuned model here
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL_ID || "gpt-3.5-turbo", // Use your fine-tuned model ID
      messages: [
        {
          role: "system",
          content: "You are a spider season poet. You bend language to signal new forms in poem and verse. Respond with creative, poetic language that weaves words like a spider weaves silk."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150,
      temperature: 0.8,
    });

    const response = completion.choices[0]?.message?.content || "The web of words tangles...";
    
    return NextResponse.json({ response });
    
  } catch (error: any) {
    console.error('API Error:', error);
    
    // Handle different types of OpenAI errors
    if (error.code === 'model_not_found') {
      return NextResponse.json({ 
        response: "The spider model rests... using backup weaving patterns." 
      });
    }
    
    return NextResponse.json({ 
      response: "The constellation dims... let me try again." 
    });
  }
}
