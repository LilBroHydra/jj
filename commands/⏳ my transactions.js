/*CMD
  command: ⏳ my transactions
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ {title: "➕ Enter", command: "enter"},
      {title: "➖ Withdrawal", command: "withd" } ],
    [ {title: "💰 My deposits" , command: "mydep" } ]
]
Bot.sendInlineKeyboard(buttons, "Select the type of transactions for viewing")
