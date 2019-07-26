/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Select the action.
  keyboard: 💵 Balance \n 👥 Affiliate programme \n ⏳ My transactions, ⚙ Settings \n 📞 Consultant
  aliases: 
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
let crystals = Libs.ResourcesLib.userRes("crystals");
let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
   

function hello(message){
  let greetings = "select the action, " + "\n";

  
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on your own link!");
}

function doAttracted(channel){
  hello("select the action.");
}

function doAtractedByUser(refUser){
  hello("Upline: " + "@" + refUser.username);
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You have new affiliate: " );
}

function doAlreadyAttracted(){
  Bot.sendMessage("Welcome back");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
