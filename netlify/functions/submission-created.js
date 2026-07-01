// Netlify calls this automatically on every verified form submission
// (spam/honeypot hits are filtered out before this runs). It forwards the
// submission to a private Discord channel via an incoming webhook.
//
// Set DISCORD_WEBHOOK_URL in Netlify → Site settings → Environment variables.

const TITLES = {
  "speaker-submission": "🎤 New speaker / topic submission",
  feedback: "💬 New feedback"
};

// Netlify metadata we don't want to echo into Discord.
const HIDDEN_FIELDS = new Set(["bot-field", "form-name"]);

exports.handler = async (event) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return { statusCode: 500, body: "DISCORD_WEBHOOK_URL is not configured" };
  }

  let payload;
  try {
    ({ payload } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: "Invalid submission payload" };
  }

  const formName = payload.form_name || "unknown";
  const data = payload.data || {};

  const fields = Object.entries(data)
    .filter(([key, value]) => value && !HIDDEN_FIELDS.has(key))
    .slice(0, 25)
    .map(([name, value]) => ({
      name,
      value: String(value).slice(0, 1024)
    }));

  const body = {
    username: "Fullstack Nights",
    embeds: [
      {
        title: TITLES[formName] || `New submission: ${formName}`,
        color: 0x5865f2,
        fields,
        timestamp: new Date().toISOString()
      }
    ]
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    return { statusCode: 502, body: `Discord webhook failed: ${response.status}` };
  }

  return { statusCode: 200, body: "Forwarded to Discord" };
};
