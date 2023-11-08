setTimeout(() => {
    const path = require('path');
    const fileName = path.basename(__filename, path.extname(__filename));
    console.log(fileName);
  }, 3000);