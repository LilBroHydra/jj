/*CMD
  command: abt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let money = Libs.ResourcesLib.userRes("money"); 
money.set(1000000);

Libs.ResourcesLib.userRes("wood").set(1000000);
Libs.ResourcesLib.chatRes("crystals").set(100000);

Libs.ResourcesLib.userRes("bank_deposit").set(10000000);

Bot.runCommand("/abt1");
