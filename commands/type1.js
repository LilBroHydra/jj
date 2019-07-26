/*CMD
  command: type1
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
best = a / (1/1.5)
var b = best.toFixed(3);

let msg;
if(newTitle < 10){
  msg = "Enter the correct amount (min 10 USD)";
  
}else if (newTitle > 299) {
  msg = "Enter the correct amount (max 299 USD)" ;   
}else{
  msg = "Your income from the amount of " + newTitle + " - " + b 
}
Bot.sendMessage(msg);


