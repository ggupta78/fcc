function getFractionalChange(returnAmt, cid) {
  let fractional = [];

  returnAmt = (returnAmt - Math.floor(returnAmt)).toFixed(2);
  console.log("Fractional return amt:", returnAmt);
  
  if(returnAmt / 0.25 >= 1) {
    console.log('Quarter');
    let quarterChange = returnAmt/0.25;
    fractional.push(["Quarter", Math.trunc(quarterChange)]);
    returnAmt = quarterChange - Math.floor(quarterChange);
    console.log(quarterChange);
  }

  return fractional;
}

function getWholeCurrencyChange(returnAmt, cid) {

}

function checkCashRegister(price, cash, cid) {
  //Initialiase the change object
  var change = {};
  change.status = "";
  change.change = [];

  //Calculate total cash in cash register sent
  let cashInRegister = 0.0;
  cid.forEach(denomination => {
    cashInRegister += denomination[1];
  });
  cashInRegister = cashInRegister.toFixed(2);
  console.log("Total Cash in register:", cashInRegister);

  //Calculate return amount
  let returnAmt = (cash - price).toFixed(2);
  console.log("Return Amt:", returnAmt);

  //Compare return amount with cash in register
  if(cashInRegister < returnAmt) {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
  } else if(cashInRegister > returnAmt) {
    //Check whole and fractional denomination separately
    let fractional = getFractionalChange(returnAmt, cid);
    let whole = getWholeCurrencyChange(returnAmt, cid);
    
  }

  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.67, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);