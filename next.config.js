/** @type {import('next').NextConfig} */
const sanitizeBasePath = (value) => {
  if (!value || value === "/") return "";
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
};

const basePath = sanitizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

module.exports = nextConfig;
