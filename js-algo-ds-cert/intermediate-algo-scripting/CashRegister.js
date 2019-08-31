
function addAndDeduct(change, denomination, val, returnAmt, cidObject) {
  if(returnAmt - cidObject[denomination] >= 0) {
    change.change.push([denomination, cidObject[denomination]]);
    returnAmt = returnAmt - cidObject[denomination];
  } else {
    let denominationQuantity = returnAmt / val;
    if(denominationQuantity >= 1) {
      if(denomination === "PENNY") {
        change.change.push([denomination, (Math.round(denominationQuantity) * val)]);  
      } else {
        change.change.push([denomination, (Math.trunc(denominationQuantity) * val)]);
      }
      returnAmt = returnAmt - (Math.trunc(denominationQuantity) * val);
    }
  }
  
  return returnAmt;
}

function getChange(change, returnAmt, cidObject) {
  //let denominationItem = [];

  returnAmt = addAndDeduct(change, "ONE HUNDRED", 100, returnAmt, cidObject);
  returnAmt = addAndDeduct(change, "TWENTY", 20, returnAmt, cidObject);
  returnAmt = addAndDeduct(change, "TEN", 10, returnAmt, cidObject);
  returnAmt = addAndDeduct(change, "FIVE", 5, returnAmt, cidObject);
  returnAmt = addAndDeduct(change, "ONE", 1,  returnAmt, cidObject);
  returnAmt = addAndDeduct(change, "QUARTER", 0.25, returnAmt, cidObject);
  returnAmt = addAndDeduct(change, "DIME", 0.10, returnAmt, cidObject);
  returnAmt = addAndDeduct(change, "NICKEL", 0.05, returnAmt, cidObject);
  returnAmt = addAndDeduct(change, "PENNY", 0.01, returnAmt, cidObject);

  //return change;
}

function checkCashRegister(price, cash, cid) {
  //Initialiase the change object
  var change = {};
  change.status = "";
  change.change = [];

  //Calculate total cash in cash register sent
  let cashInRegister = 0.0;
  let cidObject = {};
  cid.forEach(denomination => {
    cashInRegister += denomination[1];
    cidObject[denomination[0]] = denomination[1];
  });
  console.log("Total Cash in register:", cashInRegister);

  //Calculate return amount
  let returnAmt = (cash - price);
  console.log("Return Amt:", returnAmt);

  //Compare return amount with cash in register
  change.change = [];
  if(cashInRegister < returnAmt) {
    change.status = "INSUFFICIENT_FUNDS";
  } else if(cashInRegister > returnAmt) {

    getChange(change, returnAmt, cidObject);

    if(cashInRegister === returnAmt) {
      change.status = "CLOSED";
    } else {
      change.status = "OPEN";
    }
  }

  console.log(change.change);
  console.log(change.status);
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

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])