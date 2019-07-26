/*CMD
  command: ✔️ create a deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: ➕ Add funds, ➖ Withdraw \n ✔️ Create a deposit \n 💰 My deposits, 📊 Calculator \n 🔙 Backward, 📱 Main menu
  aliases: 
CMD*/

var buttons = [ {title: "Plan 1 - 1.5% daily /100 days", command: "/teach ." }, {title: "Plan 2 - 2% daily / 100 days", command: "/teach1 ." }, {title: "Plan 3 - 2.5% daily / 100 days", command: "/teach2 ." }, {title: "Plan 4 - 3% daily / 100 days", command: "/teach3 ." }, {title: "Plan 5 - 3.5% daily / 100 days", command: "/teach4 ." } ]; Bot.sendInlineKeyboard(buttons, "Select the investment plan");
