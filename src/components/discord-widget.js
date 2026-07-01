import React from "react";

// Requires "Enable Server Widget" in Discord → Server Settings → Widget.
const SERVER_ID = "1521687604586614926";

function DiscordWidget() {
  return (
    <iframe
      title="Fullstack Nights Discord"
      src={`https://discord.com/widget?id=${SERVER_ID}&theme=dark`}
      width="350"
      height="500"
      loading="lazy"
      allowTransparency="true"
      frameBorder="0"
      className="max-w-full rounded shadow"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    />
  );
}

export default DiscordWidget;
