/*CMD
  command: /abenu1
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
    let res = Libs.ResourcesLib.userRes("wood");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("wood", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
         
         Bot.sendMessage("Transfered USD: " + amount)
       }
     }else{
        Bot.sendMessage("You have not such USD: " + amount)
     }
  }
}else{
  Bot.sendMessage("No params. Need another user TelegramID and AMOUNT")
}
