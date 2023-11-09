const fsPromises = require('fs').promises;
//const fs = require('fs');
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();



/* //Read file
fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8', (err, data) => { //'./files/lorem.txt' <- this is a hard coded path
if (err) throw err;
console.log(data);
})

//Write file
fs.writeFile(path.join(__dirname, 'files', 'writeFile.txt'), 'I want some pizza', (err, data) => { //'./files/lorem.txt' <- this is a hard coded path
    if (err) throw err;
    console.log('Write complete');

    //Update file
    fs.appendFile(path.join(__dirname, 'files', 'writeFile.txt'), '\nI also need a coke', (err, data) => { 
        if (err) throw err;
        console.log('Append complete');

        //Rename file
        fs.rename(path.join(__dirname, 'files', 'writeFile.txt'), path.join(__dirname, 'files', 'newFile.txt'), (err) => { 
            if (err) throw err;
            console.log('Rename complete');
        })
    })
}) 
 */

    //exit on uncaught errors
    process.on('uncaughtException', err => {
        console.error(`There was an uncaught error: ${err}`);
        process.exit(1);
    })