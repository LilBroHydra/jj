/*CMD
  command: type5
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
best = a / (1/3.5)
var b = best.toFixed(3);

let msg;
if(newTitle < 2000){
  msg = "Enter the correct amount (min 2000 USD)";
  
}else if (newTitle > 100000) {
  msg = "Enter the correct amount (max 100000 USD)" ;   
}else{
  msg = "Your income from the amount of " + newTitle + " - " + b 
}
Bot.sendMessage(msg);




