/*CMD
  command: 5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Type the amount", command: "type5"},
    
  
]


Bot.sendInlineKeyboard(buttons, "Touch button");
