export function formatCurrency(priceCents){
    return (priceCents / 100).toFixed(2);
}

// works only exporting one function
export default formatCurrency;