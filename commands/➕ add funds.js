/*CMD
  command: ➕ add funds
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: ➕ Add funds, ➖ Withdraw \n ✔️ Create a deposit \n 💰 My deposits, 📊 Calculator \n 🔙 Backward, 📱 Main menu
  aliases: 
CMD*/

var buttons = [
    {title: "Bitcoin", command: "/touch" },
  
];
Bot.sendInlineKeyboard(buttons, "Select the payment system by using which you want to invest");
