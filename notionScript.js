/* eslint-disable no-undef */
import { Client } from "@notionhq/client";
import simpleGit from "simple-git";
import { NotionToMarkdown } from "notion-to-md";
import dotenv from "dotenv";
import fs from "fs";

// Configure dotenv to load environment variables
dotenv.config();
