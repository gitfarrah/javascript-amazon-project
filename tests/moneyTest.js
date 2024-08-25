import{formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if(formatCurrency(2095) === '20.95'){
    console.log('✅ pass');
}else{
    console.log('❌ fail');
}

console.log('works with 0');

if(formatCurrency(0) === '0.00'){
    console.log('✅ pass');
}else{
    console.log('❌ fail');
}
