/* eslint-disable no-undef */
import { Client } from "@notionhq/client";
import simpleGit from "simple-git";
import { NotionToMarkdown } from "notion-to-md";
import dotenv from "dotenv";
import fs from "fs";

// Configure dotenv to load environment variables
dotenv.config();

// Notion API Setup
const notion = new Client({ auth: process.env.VITE_NOTION_SECRET });

// GitHub Sync Configuration
const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID || "c63f27b879c74044a15d41a79bc5e64b";
const OUTPUT_PATH = path.resolve(process.cwd(), "notes.md");
const GITHUB_REPO_PATH = path.resolve(process.cwd()); // Assumes script runs in repo root