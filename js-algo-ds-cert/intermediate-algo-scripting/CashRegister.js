function getFractionalChange(returnAmt, cid) {
  let fractional = [];

  returnAmt = (returnAmt - Math.floor(returnAmt));
  console.log("Fractional return amt:", returnAmt);
  
  let quarterChange = (returnAmt/0.25);
  if(quarterChange >= 1.0) {
    fractional.push(["QUARTER", (Math.trunc(quarterChange) * 0.25)]);
    returnAmt = (returnAmt - (Math.trunc(quarterChange) * 0.25));
  }

  let dimeChange = (returnAmt/0.10);
  if(dimeChange >= 1.0) {
    fractional.push(["DIME", (Math.trunc(dimeChange) * 0.10)]);
    returnAmt = (returnAmt - (Math.trunc(dimeChange) * 0.10));
  }

  let nickelChange = (returnAmt/0.05);
  if(nickelChange >= 1.0) {
    fractional.push(["NICKEL", (Math.trunc(nickelChange) * 0.05)]);
    returnAmt = (returnAmt - (Math.trunc(nickelChange) * 0.05));
  }

  let pennyChange = (returnAmt/0.01);
  if(pennyChange >= 1.0) {
    fractional.push(["PENNY", (Math.round(pennyChange) * 0.01)]);
    //returnAmt = (returnAmt - (Math.round(pennyChange) * 0.01));
  }

  return fractional;
}

function getWholeCurrencyChange(returnAmt, cid) {
  let wholeCurrency = [];

  returnAmt = Math.trunc(returnAmt);

  let hundredChange = (returnAmt/100);
  if(hundredChange >= 1) {
    wholeCurrency.push(["ONE HUNDRED", (Math.trunc(hundredChange) * 100)]);
    returnAmt = (returnAmt - (Math.trunc(hundredChange) * 100));
  }

  let twentyChange = (returnAmt/20);
  if(twentyChange >= 1) {
    wholeCurrency.push(["TWENTY", (Math.trunc(twentyChange) * 20)]);
    returnAmt = (returnAmt - (Math.trunc(twentyChange) * 20));
  }

  let tenChange = (returnAmt/10);
  if(tenChange >= 1) {
    wholeCurrency.push(["TEN", (Math.trunc(tenChange) * 10)]);
    returnAmt = (returnAmt - (Math.trunc(tenChange) * 10));
  }

  let fiveChange = (returnAmt/5);
  if(fiveChange >= 1) {
    wholeCurrency.push(["FIVE", (Math.trunc(fiveChange) * 5)]);
    returnAmt = (returnAmt - (Math.trunc(fiveChange) * 5));
  }

  let oneChange = (returnAmt/1);
  if(oneChange >= 1) {
    wholeCurrency.push(["DOLLAR", (Math.round(oneChange) * 1)]);
    //returnAmt = (returnAmt - (Math.trunc(fiveChange) * 5));
  }

  return wholeCurrency;
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
  cashInRegister = cashInRegister;
  console.log("Total Cash in register:", cashInRegister);

  //Calculate return amount
  let returnAmt = (cash - price);
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

checkCashRegister(379.67, 1, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);