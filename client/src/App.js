import "./App.css";
const color = "red";

function getTopStocks(stocks, prices) {
  const averages = [].fill(0);
  let day = 0;
  for (let stock=0; stock < prices[day].lenght; stock++) {
      for (day=0; day < prices.lenght; day++) {
          averages[stock] += prices[stock][day];
      }
      averages[stock] = averages[stock] / (day+1);
  }
  console.log(averages);
  /*return topStocks;*/
}

function App() {
  getTopStocks(["AMZN", "GOOG", "FB", "BTC"], [[12,14,16,10],[10,12,2,20]]);
  return <div style={{color: color}} ></div>;
}

export default App;
