/* eslint-disable no-undef */
import { Client } from "@notionhq/client";
import simpleGit from "simple-git";
import { NotionToMarkdown } from "notion-to-md";
import dotenv from "dotenv";
import fs from "fs";

const git = simpleGit();
dotenv.config();

// Notion API Setup
const notion = new Client({ auth: process.env.VITE_NOTION_SECRET });
const PAGE_ID = "c63f27b879c74044a15d41a79bc5e64b"; // Replace with your Notion page ID

// Initialize Notion-to-Markdown library
const n2m = new NotionToMarkdown({ notionClient: notion });

// Export a Notion page to Markdown
async function exportNotionPage(pageId, outputPath) {
  try {
    console.log("Fetching content from Notion...");
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const markdown = n2m.toMarkdownString(mdBlocks);

    // Save as notes.md
    fs.writeFileSync(outputPath, markdown);
    console.log(`Content saved to ${outputPath}`);
  } catch (err) {
    console.error("Failed to export Notion page:", err);
  }
}

// Replace with your Notion page ID and desired output path
const pageId = PAGE_ID; // Get from the Notion URL
// const outputPath = "./notes.md";

// Execute
// exportNotionPage(pageId, outputPath);

async function pushToGit(filePath) {
  try {
    await git.add(filePath);
    await git.commit("Update notes from Notion");
    await git.push("origin", "main"); // Adjust branch as needed
    console.log("Notes pushed to GitHub successfully!");
  } catch (err) {
    console.error("Failed to push to GitHub:", err);
  }
}

// After exporting the notes, push them to GitHub
(async () => {
  const outputPath = "./notes.md";
  await exportNotionPage(pageId, outputPath);
  await pushToGit(outputPath);
})();

