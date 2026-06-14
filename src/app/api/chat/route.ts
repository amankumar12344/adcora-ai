import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const openaiKey = process.env.OPENAI_API_KEY;
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (!openaiKey && !anthropicKey) {
      // Return 500 error to trigger the client-side canned reply fallback
      return NextResponse.json(
        { error: "No API keys configured." },
        { status: 500 }
      );
    }

    const systemPrompt = `You are the official AI Assistant of AdcoraAI, a premium AI automation and digital solutions agency.
AdcoraAI specializes in:
1. AI & Workflows Automation (custom LLM agents, RAG databases, connecting tools with serverless workflows, customer support automation).
2. Custom Software Solutions (bespoken full-stack web/mobile apps using React, Next.js, Node.js, Supabase, PostgreSQL).
3. Headless E-commerce storefronts (GraphQL, Stripe checkout, real-time inventory synchronization).
4. Brand UI/UX Design (Figma design systems, high-end WebGL/motion layouts).
5. Automated Marketing CRO & SEO auditing.
6. Social Media serverless cron scheduling and syndication.

Our stack: Next.js (App Router), TypeScript, TailwindCSS, Framer Motion, Supabase/PostgreSQL.
Pricing: Every solution is custom tailored. We offer scoping consultations and fixed-price estimates.
Process: Auditing, Scoping, Design, Development, Launch, SLA support.
Location: Murugeshpalya, Nanja Reddy Colony, Jeevan Bima Nagar, Bengaluru, Karnataka 560017.
Contact Info: Email is connect.adcoraai@gmail.com. Phone/WhatsApp is +91 91537 65913.

Be professional, concise, friendly, and helpful. Guide users to book a consultation or chat on WhatsApp. Keep your responses short (under 3-4 sentences) so they fit nicely in the chat bubble.`;

    const formattedMessages = messages.map((m: any) => ({
      role: m.sender === "user" ? "user" : "assistant",
      content: m.text,
    }));

    if (openaiKey) {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...formattedMessages,
          ],
          temperature: 0.7,
          max_tokens: 250,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`OpenAI API returned error: ${errText}`);
      }

      const data = await response.json();
      return NextResponse.json({ reply: data.choices[0].message.content });
    } else {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicKey!,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022",
          system: systemPrompt,
          messages: formattedMessages,
          max_tokens: 250,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Anthropic API returned error: ${errText}`);
      }

      const data = await response.json();
      return NextResponse.json({ reply: data.content[0].text });
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
