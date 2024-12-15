import { Client } from "@notionhq/client";
import simpleGit from "simple-git";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs";

const git = simpleGit();

// Notion API Setup
const notion = new Client({ auth: process.env.VITE_NOTION_SECRET });
const PAGE_ID =
  "https://shariar-islam.notion.site/Common-Path-Not-Going-to-Focus-This-c63f27b879c74044a15d41a79bc5e64b?pvs=4"; // Replace with your Notion page ID

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

//

// Git Setup
// const git = simpleGit();

// // Fetch content from Notion
// async function fetchNotionContent(pageId: string) {
//   try {
//     const response = await notion.pages.retrieve({ page_id: pageId });

//     // Customize this to process the response based on your data format
//     const content = JSON.stringify(response, null, 2); // Convert the API response to a readable format

//     // Save the content to a Markdown file
//     const filePath = "./notes.md";
//     fs.writeFileSync(filePath, content);
//     console.log(`Saved Notion content to ${filePath}`);
//     return filePath;
//   } catch (error) {
//     console.error("Error fetching Notion content:", error);
//     return null;
//   }
// }

// // Push to GitHub
// async function pushToGitHub(filePath) {
//   try {
//     await git.add(filePath);
//     await git.commit("Update notes from Notion");
//     await git.push("origin", "main"); // Ensure your branch is named 'main' or change as needed
//     console.log("Notes pushed to GitHub successfully!");
//   } catch (error) {
//     console.error("Error pushing to GitHub:", error);
//   }
// }

// // Main function
// (async () => {
//   const filePath = await fetchNotionContent(PAGE_ID);
//   if (filePath) {
//     await pushToGitHub(filePath);
//   }
// })();
