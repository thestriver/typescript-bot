import { Client } from "discord.js"
import { connectDatabase } from "./database/connectDatabase"
import { validateEnv } from "./utils/validateEnv"
import { onMessage } from "./events/onMessage"

(async () => {
    
    if (!validateEnv()) return;

    const BOT = new Client();

    BOT.on('ready', () => {
        console.log("Connected to Discord!");
    });

    await connectDatabase()
    await BOT.login(process.env.BOT_TOKEN);
    BOT.on("message", async (message) => await onMessage(message));

})();



