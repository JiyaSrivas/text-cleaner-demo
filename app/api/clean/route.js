import { capitalize, removeExtraSpaces } from "jiya-npm";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { text, action } = body;

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide some text to clean." },
        { status: 400 }
      );
    }

    const validActions = ["capitalize", "removeExtraSpaces", "both"];
    if (!action || !validActions.includes(action)) {
      return NextResponse.json(
        {
          error: `Invalid action. Use one of: ${validActions.join(", ")}.`,
        },
        { status: 400 }
      );
    }

    let result = text;

    if (action === "capitalize") {
      result = capitalize(text);
    } else if (action === "removeExtraSpaces") {
      result = removeExtraSpaces(text);
    } else if (action === "both") {
      result = capitalize(removeExtraSpaces(text));
    }

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please send JSON with { text, action }." },
      { status: 400 }
    );
  }
}
