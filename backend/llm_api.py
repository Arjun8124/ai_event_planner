from openai import OpenAI
import json
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),
)


def build_prompt(user_query: str):
    return f"""
You are a strict JSON generator.

Return ONLY valid JSON.
Do NOT include any explanation or extra text.

If you do anything other than JSON, your output is invalid.

Return JSON in this exact format:

{{
  "venue_name": "string",
  "location": "string",
  "estimated_cost": "string",
  "justification": "string"
}}

Rules:
- Keep values concise and realistic
- Include currency in estimated_cost
- justification must clearly explain why the venue fits

If you cannot follow the format, return:
{{"venue_name":"N/A","location":"N/A","estimated_cost":"N/A","justification":"N/A"}}

User request:
{user_query}
"""


def get_response(user_query, model="gpt-4o-mini", temperature=0.2):
    prompt = build_prompt(user_query)

    response = client.chat.completions.create(
        model=model,
        messages=[
            {
                "role": "system",
                "content": "You ONLY output valid JSON. No explanations.",
            },
            {"role": "user", "content": prompt},
        ],
        temperature=temperature,
    )

    output_text = response.choices[0].message.content.strip()

    if not output_text.startswith("{"):
        return {"error": "Invalid JSON", "raw": output_text}

    try:
        return json.loads(output_text)
    except:
        return {"error": "Invalid JSON", "raw": output_text}
