const fs = require('fs');
const path = require('path');
const iconList = require('../api/iconlist');

const iconsDir = path.join(__dirname, '..', 'icons');
const missingIcons = [];

iconList.forEach(icon => {
    const lightFile = `${icon}-Light.svg`;
    const darkFile = `${icon}-Dark.svg`;
    const defaultFile = `${icon}.svg`;

    // Check if at least one variant exists
    const hasLight = fs.existsSync(path.join(iconsDir, lightFile));
    const hasDark = fs.existsSync(path.join(iconsDir, darkFile));
    const hasDefault = fs.existsSync(path.join(iconsDir, defaultFile));

    if (!hasLight && !hasDark && !hasDefault) {
        missingIcons.push(`${icon} (no variants found)`);
    } else {
        if (!hasLight && !hasDefault) missingIcons.push(lightFile);
        if (!hasDark && !hasDefault) missingIcons.push(darkFile);
    }
});

if (missingIcons.length > 0) {
    console.log('Missing icons:');
    missingIcons.forEach(icon => console.log(`- ${icon}`));
    process.exit(1);
} else {
    console.log('All icons are present.');
}