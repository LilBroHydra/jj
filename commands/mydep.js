/*CMD
  command: mydep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("money");
    let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
    let wood = Libs.ResourcesLib.userRes("wood");
    
    if(wood.have(1)){
   
         Bot.sendMessage("*Your opened deposits for now:*" + "\n*1.*" + "$15 - $299" + "\nSum: " + wood.value() + " USD");
       
     }else{
        Bot.sendMessage("sorry: you have no opened deposits");
     }
