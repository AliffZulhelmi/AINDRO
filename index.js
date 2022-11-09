const MusicBot = require("./structures/Client");
const client = new MusicBot();
const keep_alive = require('./handlers/keep_alive.js')

client.connect()
module.exports = client;
