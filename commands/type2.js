/*CMD
  command: type2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Type amount
  keyboard: 
  aliases: 
CMD*/

newTitle = User.getProperty("LastMessageID");
newTitle = message;
var a = newTitle
best = a / (1/2)
var b = best.toFixed(3);


let msg;
if(newTitle < 300){
  msg = "Enter the correct amount (min 300 USD)";
  
}else if (newTitle > 500) {
  msg = "Enter the correct amount (max 500 USD)" ;   
}else{
  msg = "Your income from the amount of " + newTitle + " - " + b 
}
Bot.sendMessage(msg);

