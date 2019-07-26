/*CMD
  command: 👥 affiliate programme
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 📎 Affiliate link \n 🆔 My ID, 👤 My Inviter \n 🌐 My team \n 🔙 Backward, 📱 Main menu
  aliases: 
CMD*/

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "There is/are " + refList.length + " users in your team who brings you *0.00 USD*";
  
}else{
  msg = "There is/are 0 users in your team who brings you *0.00 USD*";
}
Bot.sendKeyboard("📎 Affiliate link, \n🆔 My ID, 👤 My Inviter, \n🌐 My team, \n🔙 Backward, 📱 Main menu", msg);
