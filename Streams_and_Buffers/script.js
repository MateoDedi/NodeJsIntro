const fs = require('fs');

const readStream = fs.createReadStream('./Streams_and_Buffers/hugeText.html', { encoding: 'utf8' });
let writeStream = fs.createWriteStream('./Streams_and_Buffers/newFile.txt', {encoding: 'utf8'});

readStream.on('data', (chunk) => {
  console.log(chunk);
  console.log('--------- NEW CHUNK --------');

  writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('--------- End of File --------');
    // Close the write stream after writing all chunks
    writeStream.end();
  });

readStream.on('error', (err) => {
  console.error(`Error reading file: ${err.message}`);
});


