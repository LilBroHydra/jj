/*CMD
  command: 📊 calculator
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Plan 1 - 1.5% daily / 100 days", command: "1btc" },
    {title: "Plan 2 - 2% daily / 100 days", command: "2" },
    {title: "Plan 3 - 2.5% daily / 100 days", command: "3" },
    {title: "Plan 4 - 3% daily / 100 days", command: "4" },
    {title: "Plan 5 - 3.5% daily / 100 days", command: "5" }
];


Bot.sendInlineKeyboard(buttons, "Select the investment plan");

