const http = require('http');
const path = require('path');
const fs = require('fs');
const { MongoClient } = require('mongodb');
let responseData;
let DB_NAME = "memories";
let COLLECTION_NAME = "memories-list"
async function main() {
    const uri = `mongodb+srv://shafiadam18:BCsDoUYhJIR1JCPK@cluster0.qzr2iuu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // responseData = await getAllDataFromMongo(client)
    } finally {
        await client.close();
    }
}


main().catch(console.error);

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/api') {
        // main().catch(console.error);
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });    const uri = `mongodb+srv://shafiadam18:BCsDoUYhJIR1JCPK@cluster0.qzr2iuu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
        const client = new MongoClient(uri);
        try {
            await client.connect();
            responseData = await getAllDataFromMongo(client)
            res.end(JSON.stringify(responseData))
        } finally {
            await client.close();
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(" <h1> 404 Nothing Found </h1>")
    }
});

async function getAllDataFromMongo(client) {
    const cursor = client.db(DB_NAME).collection(COLLECTION_NAME)
        .find();
    const results = await cursor.toArray();
    if (results.length > 0) {
        console.log('results===========>', results)
        return results;
    } else {
        console.log(`No results==========.`);
    }
}
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Our server is running on port: ${PORT}`));
