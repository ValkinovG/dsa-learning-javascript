// MaxProfit
// Given an array of stock prices (each index = day),
// find the maximum profit by choosing a single day to buy and a different day to sell,
// ensuring the buy happens before the sell.

// Example:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5 (Buy at 1, sell at 6)

const maxProfit = (stocksPricesArr) => {;
    let lowestStockPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for(let i=0; i<stocksPricesArr.length; i++){
        const currentStockPrice = stocksPricesArr[i];

        if(currentStockPrice < lowestStockPrice){
            lowestStockPrice = currentStockPrice;
        }

        const potentialProfit = currentStockPrice - lowestStockPrice;

        if(potentialProfit > maxProfit){
            maxProfit = potentialProfit;
        }
    }

    return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(`Max Profit: ${maxProfit(prices)}`);