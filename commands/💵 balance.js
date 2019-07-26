/*CMD
  command: 💵 balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: ➕ Add funds, ➖ Withdraw \n ✔️ Create a deposit \n 💰 My deposits, 📊 Calculator \n 🔙 Backward, 📱 Main menu
  aliases: 
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let bankDeposit = Libs.ResourcesLib.userRes("bank_deposit");

// it is initial res value
let baseValue = bankDeposit.baseValue();

// total income by percent
let delta = bankDeposit.value() - baseValue;

// add all income to money
money.add(delta);



Bot.sendKeyboard("➕ Add funds, ➖ Withdraw, \n✔️ Create a deposit, \n💰 My deposits, 📊 Calculator, \n🔙 Backward, 📱 Main menu", "Your current balance is " + money.value().toFixed(2) + " USD." + " How do you want to manage your funds?");
