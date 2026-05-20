const fs = require('fs');
const files = fs.readdirSync('.');
const pdfFile = files.find(f => f.endsWith('.pdf') && !f.includes('README'));
if (pdfFile) {
  fs.renameSync(pdfFile, 'NSS_Magazine_2025.pdf');
  console.log('Renamed', pdfFile, 'to NSS_Magazine_2025.pdf');
}
