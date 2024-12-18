/* eslint-disable no-undef */
import { Client } from "@notionhq/client";
import simpleGit from "simple-git";
import { NotionToMarkdown } from "notion-to-md";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Configure dotenv to load environment variables
dotenv.config();

// Notion API Setup
const notion = new Client({ auth: process.env.VITE_NOTION_SECRET });

// GitHub Sync Configuration
// const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID || "c63f27b879c74044a15d41a79bc5e64b";
const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID;
const OUTPUT_PATH = path.resolve(process.cwd(), "notes.md");
const GITHUB_REPO_PATH = path.resolve(process.cwd()); // Assumes script runs in repo root

// Initialize Notion-to-Markdown library
const n2m = new NotionToMarkdown({ notionClient: notion });


// Export a Notion page to Markdown
async function exportNotionPage(pageId, outputPath) {
  try {
    console.log("Fetching content from Notion...");
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const markdown = n2m.toMarkdownString(mdBlocks);

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Save as notes.md
    fs.writeFileSync(outputPath, markdown);
    console.log(`Content saved to ${outputPath}`);
    return outputPath;
  } catch (err) {
    console.error("Failed to export Notion page:", err);
    throw err;
  }
}



// Push changes to Git
async function pushToGit(filePath) {
  try {
    console.log("filePath payload", filePath);
    const git = simpleGit(GITHUB_REPO_PATH);

    console.log("git status", git);

    // Configure git user
    await git.addConfig('user.name', process.env.GIT_USER_NAME || 'Notion Sync Bot');
    await git.addConfig('user.email', process.env.GIT_USER_EMAIL || 'notion-sync@example.com');

    // Check if there are any changes
    const status = await git.status();
    if (status.files.length === 0) {
      console.log("No changes to commit.");
      return;
    }

    // Add, commit, and push
    await git.add(filePath);
    await git.commit("Update notes from Notion");
    await git.push('origin', 'main');

    console.log("Notes pushed to GitHub successfully!");
  } catch (err) {
    console.error("Failed to push to GitHub:", err);
    throw err;
  }
}


// Main execution function
async function syncNotionToGitHub() {
  try {
    const outputPath = await exportNotionPage(NOTION_PAGE_ID, OUTPUT_PATH);
    await pushToGit(outputPath);
  } catch (error) {
    console.error("Synchronization failed:", error);
    process.exit(1);
  }
}

// Run the sync
syncNotionToGitHub();