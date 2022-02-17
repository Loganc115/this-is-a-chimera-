const Discord = require("discord.js")
const client = new Discord.Client({
 intents: [
       "GUILDS",
       "GUILD_MESSAGES"
    ]
})
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (msg) => {
  if (msg.content === "Hey Alex guess what") {
    msg.create("You're brappin");
  }
  if (msg.content === reactions?=true) 
    {msg.react('smiling_imp')}; 
})
//add loginherealex
client.login("")
