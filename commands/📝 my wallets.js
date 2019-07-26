/*CMD
  command: 📝 my wallets
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

me = User.getProperty("wallet")

if (me) {
  btc = ": " + me;
} else {
  btc = "";
}

var buttons = [
    [ {title: "Bitcoin" + btc, command: "wallet"} ],
     
]
Bot.sendInlineKeyboard(buttons, "Select the wallet to change");
