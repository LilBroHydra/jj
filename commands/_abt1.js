/*CMD
  command: /abt1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let money = Libs.ResourcesLib.userRes("money")

let wood = Libs.ResourcesLib.userRes("wood")
let crystals = Libs.ResourcesLib.chatRes("crystals")

let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit")

Bot.sendMessage("money: " + money.value() + "\nbank_deposit: " + bank_deposit.value());
