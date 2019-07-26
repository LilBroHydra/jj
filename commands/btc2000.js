/*CMD
  command: btc2000
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

     
  var result = JSON.parse(data.content);
  var BTC_USD_Price = result.data.quotes.USD.price;
  var v = String(BTC_USD_Price)
  
var d = 2000;
var c = d / v

var n = c.toFixed(6);
var myArray = [
  "12Z1DZ1Xo8Z14hbVKFEidUSkKjQqZTthDN",
  "35t48HLfGR2qvKvZ5qSCPZ4yiP3dTvVEqn",
  "3E4HyzeS3g5q6cYF8PpoDDe5FRDCQfQadk",
  "377TFSNXg28ZCLLkEVcPui3SS6V6mvhsd7",
  "3NuCezvL3fCz32tTg4cNSLFpBszAe1hnEB",
  "3E4HyzeS3g5q6cYF8PpoDDe5FRDCQfQadk"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

let msg;
if(d < 5){
  msg = "Enter the correct amount (from 5 to 100000 USD)";
  
}else if (d > 100000) {
  msg = "Enter the correct amount (from 5 to 100000 USD" ;
}else{
  msg = "Please Send " + n + " BTC to the " + "*" + randomItem + "*" + " The payment will be credited automatically."
}
Bot.sendMessage(msg);

