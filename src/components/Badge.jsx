import React from "react";

function Badge({ color, message }) {
  return (
    <span
      class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium text-white"
      style={{ backgroundColor: color }}
    >
      {message}
    </span>
  );
}

export default Badge;
