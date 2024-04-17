const fs = require('fs');

// Function to read a file asynchronously
function readFileAsync(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

// Function to aggregate data from multiple files
function aggregateData(files, callback) {
    let aggregatedData = [];
    let filesCount = files.length;
    let filesProcessed = 0;

    files.forEach(filename => {
        readFileAsync(filename, (err, data) => {
            if (err) {
                callback(err, null);
                return;
            }
            aggregatedData.push(data);
            filesProcessed++;
            if (filesProcessed === filesCount) {
                callback(null, aggregatedData);
            }
        });
    });
}

// Usage
const files = ['file1.txt', 'file2.txt', 'file3.txt'];

aggregateData(files, (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated Data:', data);
});

