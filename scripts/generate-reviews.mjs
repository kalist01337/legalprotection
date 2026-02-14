import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const reviewsDir = path.join(rootDir, "public", "media", "reviews");
const outputDir = path.join(rootDir, "src", "generated");
const outputFile = path.join(outputDir, "reviews.ts");

const allowedExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

function listReviewFiles() {
  if (!fs.existsSync(reviewsDir)) {
    return [];
  }

  return fs
    .readdirSync(reviewsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => allowedExt.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map((name) => `/media/reviews/${name}`);
}

const files = listReviewFiles();
const fallback = ["/media/review-placeholder.svg"];
const finalFiles = files.length > 0 ? files : fallback;

const content = `// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
// Run: npm run generate:reviews

export const reviewImageFiles = ${JSON.stringify(finalFiles, null, 2)} as const;
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, content, "utf8");
console.log(`[generate:reviews] Generated ${path.relative(rootDir, outputFile)} with ${finalFiles.length} file(s).`);
