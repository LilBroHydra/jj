/*CMD
  command: 🎶 notifications
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
   
    [ {title: "✔️Deposit accrual", command: "accrual" } ],
   
]
Bot.sendInlineKeyboard(buttons, "Setting of notifications")
