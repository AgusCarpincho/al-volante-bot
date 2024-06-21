const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use((ctx, next) => {
  console.log(JSON.stringify(ctx.update.message));
  next();
});

bot.start((ctx) =>
  ctx.reply(
    "Hola ! En que te puedo ayudar ? Si necesitas ayudas sobre como interactuar conmigo utiliza el comando /help haciendo click en el mismo o escribiendolo"
  )
);

bot.help((ctx) =>
  ctx.reply(
    "/telefono - Nuestro numero en WhatsApp para que puedas llamarnos !\n/sucursal - Nuestra ubicacion para que puedas pasar a consultar presencialmente\n/instagram - Nuestro instagram para que puedas seguirnos y tambien consultar por ese medio !\n/precios - Los precios de nuestras clases ! Elegi el que mas te convenga"
  )
);

bot.command("telefono", (ctx) => {
  const replyMessage = `Podes contactarnos al ${process.env.PHONE_NUMBER}`;
  ctx.reply(replyMessage);
});

bot.command("sucursal", (ctx) => {
  const replyMessage = `Podes encontrarnos en ${process.env.BRANCH_ADDRESS}`;
  ctx.reply(replyMessage);
});

bot.command("instagram", (ctx) => {
  const replyMessage = `Podes contactarnos al ${process.env.INSTAGRAM}`;
  ctx.reply(replyMessage);
});

bot.command("precios", (ctx) => {
  const replyMessage = `Elegi el paquete que mas te convenga\n\n ${process.env.PRICING_INFO}`;
  ctx.reply(replyMessage);
});

bot.hears("Hola", (ctx) => ctx.reply("Hola!"));
bot.launch(() => {
  console.log("AlVolanteBot is running !");
});

// Enable graceful stop
process.once("SIGINT", () => {
  console.log("Apagando bot ...");
  bot.stop("SIGINT");
});

process.once("SIGTERM", () => {
  console.log("Apagando bot ...");
  bot.stop("SIGTERM");
});
