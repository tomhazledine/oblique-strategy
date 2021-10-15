const { strategies } = require("./oblique-strategies");

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const createPadding = (char, length) =>
  Array.from({ length: length }, (_, i) => i + 1)
    .map((i) => char)
    .join("");

const randomCollectionIndex = random(0, strategies.length - 1);
const selectedStrategyCollection = strategies[randomCollectionIndex];
const randomStrategyIndex = random(
  0,
  selectedStrategyCollection.strategies.length - 1
);
const selectedStrategy =
  selectedStrategyCollection.strategies[randomStrategyIndex];
const credit = `- ${selectedStrategyCollection.name} (${selectedStrategyCollection.year})`;

const contentWidth = Math.max(selectedStrategy.length, credit.length);

const border = createPadding("─", contentWidth);
const padding = createPadding(" ", contentWidth);
const paddedContent = selectedStrategy.padEnd(contentWidth, " ");
const paddedCredit = credit.padStart(contentWidth, " ");

const blockStart = `┌──${border}──┐\n`;
const blank = `│  ${padding}  │\n`;
const blockMiddle = `│  ${paddedContent}  │\n`;
const blockCredit = `│  ${paddedCredit}  │\n`;
const blockEnd = `└──${border}──┘\n`;

const finalOutput =
  blockStart + blank + blockMiddle + blank + blockCredit + blank + blockEnd;
console.log(finalOutput);
