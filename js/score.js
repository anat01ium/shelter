// Styles
const b = '\x1B[1m';       // bold
const l = '\x1B[2m';       // light
const i = '\x1B[3m';       // italic
const u = '\x1B[4m';       // underline

// Colors
const yellow = '\x1B[33m';

// Reset
const r = '\x1B[m';        // reset all
const rc = '\x1B[39m';     // reset color

console.log(`
${b+u}Scoring Criteria${r}

${b}Maximum score: 110 points${r}
${l+i}Note: several small sub-criteria are grouped into single bullets so every line is worth at least 5 points. A merged bullet awards full points only when all items inside it are satisfied.${r}

${b+u}Main page (70 points)${r}

${b}Markup validation +10${r}
${l}[x]${r} Markup is valid per https://validator.w3.org/. "Document checking completed. No errors or warnings to show." - full points. Warnings (no errors) - half points ${b+yellow}+5${r}
${l}[x]${r}The header logo is built from text elements, the page contains exactly one <h1>, and a favicon is added ${b+yellow}+5${r}

${b}Layout matches the design +35${r}
${l}[x]${r} <header> block ${b+yellow}+5${r}
${l}[x]${r} Not only block ${b+yellow}+5${r}
${l}[x]${r} About block ${b+yellow}+5${r}
${l}[x]${r} Our Friends block ${b+yellow}+5${r}
${l}[x]${r} Help block ${b+yellow}+5${r}
${l}[x]${r} In addition block ${b+yellow}+5${r}
${l}[x]${r} <footer> block ${b+yellow}+5${r}

${b}CSS requirements +15${r}
${l}[x]${r} The Help block is positioned using a grid layout (flexbox or grid) ${b+yellow}+5${r}
${l}[x]${r} When zooming out or widening the browser window (>1280px), the layout stays centered - it doesn't shift to the side or stretch to full width ${b+yellow}+5${r}
${l}[x]${r} The background color stretches across the full page width ${b+yellow}+5${r}

${b}Interactivity +10${r}
${l}[x]${r} The About the Shelter navigation item is highlighted and non-interactive; the other navigation items are interactive; smooth anchor scrolling works; and all page links behave per the Page links and navigation section ${b+yellow}+5${r}
${l}[x]${r} Each pet card in Our Friends is interactive when hovering over any area of the card; links and buttons have hover/active styling beyond cursor: pointer (color/background change); visual changes are smooth and do not affect neighboring elements ${b+yellow}+5${r}

${b+u}Pets page (40 points)${r}

${b}Markup validation +10${r}
${l}[x]${r} Markup is valid per https://validator.w3.org/ (same rules as for Main) ${b+yellow}+5${r}
${l}[x]${r} The header logo is built from text elements, the page contains exactly one <h1>, and a favicon is added ${b+yellow}+5${r}

${b}Layout matches the design +15${r}
${l}[x]${r} <header> block ${b+yellow}+5${r}
${l}[x]${r} Our Friends block ${b+yellow}+5${r}
${l}[x]${r} <footer> block ${b+yellow}+5${r}

${b}CSS requirements +5${r}
${l}[x]${r} When zooming out or widening the browser window (>1280px), the layout stays centered, and the background color stretches across the full page width ${b+yellow}+5${r}

${b}Interactivity +10${r}
${l}[x]${r} The Our pets navigation item is highlighted and non-interactive; the other navigation items are interactive; pagination buttons show correct enabled/disabled state; smooth anchor scrolling works; and all page links behave per the Page links and navigation section ${b+yellow}+5${r}
${l}[x]${r} Each pet card in Our Friends is interactive when hovering over any area of the card; links and buttons have hover/active styling beyond cursor: pointer; visual changes are smooth and do not affect neighboring elements ${b+yellow}+5${r}
`)
