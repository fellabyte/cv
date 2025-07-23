// app/api/svg-video/route.ts
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  // read the SVG you want to insert
  const svgPath = path.join(process.cwd(), "public/images", "next.svg");
  const innerSvg = fs.readFileSync(svgPath, "utf8");

  // wrap it in a 16:9 aspect SVG (e.g., 1280x720)
  const output = `
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#000000" />
      <g transform="scale(0.7)" transform-origin="center" >
        ${innerSvg}
      </g>
    </svg>
  `;

  return new Response(output, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Content-Disposition": 'inline; filename="video-ratio.svg"',
    },
  });
}
