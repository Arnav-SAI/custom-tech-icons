const fs = require('fs');
const path = require('path');

// Define paths
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const publicDir = path.join(projectRoot, 'public');
const apiDir = path.join(projectRoot, 'api');
const iconsDir = path.join(projectRoot, 'icons');

// Function to copy directories with error handling
function copyDir(src, dest, dirName) {
    try {
        if (!fs.existsSync(src)) throw new Error(`${dirName} directory not found`);
        fs.cpSync(src, dest, { recursive: true });
        console.log(`Copied ${dirName} to ${dest}`);
    } catch (error) {
        console.error(`Error copying ${dirName}: ${error.message}`);
        process.exit(1);
    }
}

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
    console.log('Created dist/ directory');
}

// Copy directories
copyDir(publicDir, distDir, 'public');
copyDir(apiDir, path.join(distDir, 'api'), 'api');
copyDir(iconsDir, path.join(distDir, 'icons'), 'icons');

console.log('Build completed successfully.');