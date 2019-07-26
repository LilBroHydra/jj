/*CMD
  command: /touch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: ➕ Add funds, ➖ Withdraw \n ✔️ Create a deposit \n 💰 My deposits, 📊 Calculator \n 🔙 Backward, 📱 Main menu
  aliases: 
CMD*/

var buttons = [
    [ {title: "10", command: "btc10"},
      {title: "15", command: "btc15"},
      {title: "25", command: "btc25"} ],
    [ {title: "50", command: "btc50"},
      {title: "100", command: "btc100"},
      {title: "250", command: "btc250"} ],
    [ {title: "500", command: "btc500"},
      {title: "1000", command: "btc1000"},
      {title: "2000", command: "btc2000"} ],
    [ {title: "3000", command: "btc3000"},
      {title: "5000", command: "btc5000"},
      {title: "10000", command: "btc10000"} ],




    [ {title: "Type amount manually", command: "manualbtc" } ]
]
Bot.sendInlineKeyboard(buttons, "What amount do you want to invest?")
