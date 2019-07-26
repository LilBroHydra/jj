/*CMD
  command: wallet1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Select the action
  keyboard: 
  aliases: 
CMD*/

message_id = User.getProperty("wallet")
newTitle = "Bitcoin: " + message_id;
var buttons = [
    {title: newTitle, command: "wallet" },
]
if(message_id){
  Bot.editInlineKeyboard(buttons, message_id);
  Bot.sendMessage("Your wallet has been successfully changed.")
  
}else{
  Bot.sendMessage("Not worked. Try agan later");
}
