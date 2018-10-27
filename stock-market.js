// create a function that takes in an array of numbers
// which act as stock prices, and return the maximum profit
// that could have been made by buying a stock at the given
// price and then selling the stock later on.


// define a function that takes in an input of numbers
// assign a variable to equal 0
// for each array index variable "buy" in numbers (0, 1, 2, 3, 4, 5, 6)
  // for each array variable "buy" after the first comparator in numbers (1, 2, 3, 4, 5, 6)
    // assign the difference between the selling price to the buying price (sell - buy)
function maxProfit (numbers){
  var temp = 0;
  for (var buy = 0; buy < numbers.length; buy++){
    for (var sell = buy + 1; sell < numbers.length; sell++){
      var total = numbers[sell] - numbers[buy];
      //console.log(total);
      if (total > temp){
        temp = total;
        //console.log(temp);
      }
    }
  }
  console.log(temp);
}
maxProfit([45, 24, 35, 31, 40, 38, 11]);