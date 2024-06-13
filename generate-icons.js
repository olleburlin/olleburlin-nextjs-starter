const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const sizes = [
  { size: 57, name: "apple-icon-57x57.png" },
  { size: 60, name: "apple-icon-60x60.png" },
  { size: 72, name: "apple-icon-72x72.png" },
  { size: 76, name: "apple-icon-76x76.png" },
  { size: 114, name: "apple-icon-114x114.png" },
  { size: 120, name: "apple-icon-120x120.png" },
  { size: 144, name: "apple-icon-144x144.png" },
  { size: 152, name: "apple-icon-152x152.png" },
  { size: 180, name: "apple-icon-180x180.png" },
  { size: 192, name: "android-icon-192x192.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 96, name: "favicon-96x96.png" },
  { size: 16, name: "favicon-16x16.png" },
  { size: 144, name: "ms-icon-144x144.png" },
];

const outputDir = path.join(__dirname, "public/icons");

fs.ensureDirSync(outputDir);

const generateIcons = async () => {
  const masterImagePath = path.join(__dirname, "src/app/master.png");

  await Promise.all(
    sizes.map(async ({ size, name }) => {
      await sharp(masterImagePath)
        .resize(size, size)
        .toFile(path.join(outputDir, name));
    })
  );

  console.log("Icons generated successfully");
};

generateIcons();
