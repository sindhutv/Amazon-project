import {formatCurrency} from "../scripts/utils/money.js";

console.log('Converts Cents into dollars');
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
    console.log('Failed');
}

console.log('Works with Zero');
if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
    console.log('Failed');
}

console.log('Rounds up  to the neareset Cents');
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
    console.log('Failed');
}

