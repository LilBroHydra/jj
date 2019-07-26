/*CMD
  command: /abenu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  

  if(!arr[1]){
    Bot.sendMessage("No amount. Need amount");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("bank_deposit");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("bank_deposit", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
         let secs_in_1_minutes = 1 * 60 *60 * 24;
         anotherRes.growth.addPercent({percent: 1.5, interval: secs_in_1_minutes });
         Bot.sendMessage("Transfered USD: " + amount)
       }
     }else{
        Bot.sendMessage("You have not such USD: " + amount)
     }
  }
}else{
  Bot.sendMessage("No params. Need another user TelegramID and AMOUNT")
}
