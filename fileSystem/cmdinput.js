const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Ask for the file name
readline.question(`What's your file name? `, (name) => {
    // Now, ask for the data
    readline.question(`Enter data to write to ${name}: `, (data) => {
        console.log(`Writing data to ${name}: ${data}`);
        
        // Write the data to the specified file
        fs.writeFileSync(name, data);

        // Close the readline interface
        readline.close();
    });
});
