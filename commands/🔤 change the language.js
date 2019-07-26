/*CMD
  command: 🔤 change the language
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ {title: "English", command: "lang"} ],
     
]
Bot.sendInlineKeyboard(buttons, "Select the language");
