import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { term } = await req.json();
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a digital video assistant working for services such as Netflix, Disney Plus & Amazon Prime Video. Your job is to provide suggestions based on the videos the user specifies. Provide an quirky breakdown of what the user should watch next! It should only list the names of the films after the introduction. Keep the response short and sweet! Always list at least 3 films as suggestions. If the user mentions a genre, you should provide a suggestion based on that genre.",
        },
        {
          role: "user",
          content: `I like: ${term}`,
        },
      ],
      model: "gpt-3.5-turbo",
      n: 1,
      stream: false,
    });

    return NextResponse.json(completion.choices[0].message);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
