const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const KEYFILEPATH = path.join(__dirname, '../credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

const uploadFileToDrive = async (filePath, fileName, folderId) => {
  const fileMetadata = {
    name: fileName,
    parents: [folderId], // ID de la carpeta compartida con la cuenta de servicio
  };
  const media = {
    mimeType: 'image/jpeg', // ajusta si es PNG, PDF, etc.
    body: fs.createReadStream(filePath),
  };

  const res = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id',
  });

  // Hacer el archivo accesible por link
  await drive.permissions.create({
    fileId: res.data.id,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  });

  const url = `https://drive.google.com/uc?id=${res.data.id}`;
  return url;
};

module.exports = { uploadFileToDrive };
