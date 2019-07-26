/*CMD
  command: 👤 my inviter
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 📎 Affiliate link \n 🆔 My ID, 👤 My Inviter \n 🌐 My team \n 🔙 Backward, 📱 Main menu
  aliases: 
CMD*/

let u = Libs.ReferralLib.currentUser.attractedByUser();
let chanell = Libs.ReferralLib.currentUser.attractedByChannel();


if(u){
  msg = "Inviter: " + u.telegramid
}else if (chanell){
  msg = msg + chanell
}else{
  msg = "*No inviter.*"
}

Bot.sendMessage(msg);
