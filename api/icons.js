const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const { i: iconName, theme } = req.query;

    if (!iconName || !theme) {
        res.status(400).send('Missing icon name or theme');
        return;
    }

    const themeSuffix = theme.toLowerCase() === 'light' ? 'Light' : 'Dark';
    const fileName = `${iconName}-${themeSuffix}.svg`;
    const defaultFileName = `${iconName}.svg`;
    const filePath = path.join(__dirname, '..', 'icons', fileName);
    const defaultFilePath = path.join(__dirname, '..', 'icons', defaultFileName);

    if (fs.existsSync(filePath)) {
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream(filePath).pipe(res);
    } else if (fs.existsSync(defaultFilePath)) {
        res.setHeader('Content-Type', 'image/svg+xml');
        fs.createReadStream(defaultFilePath).pipe(res);
    } else {
        res.status(404).send(`Icon ${fileName} not found`);
    }
};