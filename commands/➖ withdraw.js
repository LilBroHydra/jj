/*CMD
  command: ➖ withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: ➕ Add funds, ➖ Withdraw \n ✔️ Create a deposit \n 💰 My deposits \n 🔙 Backward, 📱 Main menu
  aliases: 
CMD*/

var buttons = [
    {title: "Bitcoin", command: "/toch" }
];	
Bot.sendInlineKeyboard(buttons, "Select the payment system");
