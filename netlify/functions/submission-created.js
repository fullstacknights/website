// Netlify calls this automatically on every verified form submission
// (spam/honeypot hits are filtered out before this runs). It forwards the
// submission to a private Discord channel via an incoming webhook.
//
// This is an event-triggered function (named after the "submission-created"
// event), so Netlify invokes it internally — it is not exposed as a public
// HTTP endpoint. Set DISCORD_WEBHOOK_URL in Netlify → Environment variables.

// null-prototype map so a form-controlled name can't resolve to an inherited
// Object.prototype member (e.g. "toString", "constructor").
const TITLES = Object.assign(Object.create(null), {
  "speaker-submission": "🎤 New speaker / topic submission",
  feedback: "💬 New feedback"
});

// Netlify metadata we don't want to echo into Discord.
const HIDDEN_FIELDS = new Set(["bot-field", "form-name"]);

exports.handler = async (event) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("submission-created: DISCORD_WEBHOOK_URL is not configured");
    return { statusCode: 500, body: "DISCORD_WEBHOOK_URL is not configured" };
  }

  let formName, data;
  try {
    const { payload } = JSON.parse(event.body);
    formName = payload.form_name || "unknown";
    data = payload.data || {};
  } catch {
    return { statusCode: 400, body: "Invalid submission payload" };
  }

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

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      console.error(
        `submission-created: Discord returned ${response.status} for form "${formName}"`
      );
      return {
        statusCode: 502,
        body: `Discord webhook failed: ${response.status}`
      };
    }
  } catch (error) {
    console.error(
      `submission-created: could not reach Discord webhook: ${error.message}`
    );
    return { statusCode: 502, body: "Could not reach Discord webhook" };
  }

  return { statusCode: 200, body: "Forwarded to Discord" };
};
