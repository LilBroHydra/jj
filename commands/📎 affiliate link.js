/*CMD
  command: 📎 affiliate link
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 📎 Affiliate link \n 🆔 My ID, 👤 My Inviter \n 🌐 My team \n 🔙 Backward, 📱 Main menu
  aliases: 
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("hundredprofit_bot");
Bot.sendMessage("Your personal affiliate link: ")
Bot.sendMessage(parther_link);
