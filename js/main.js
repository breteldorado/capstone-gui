const CHART = document.getElementById("myChart");
console.log(CHART);

var i = 0; //loop counter
var tempHistory=[];
var timeHistory=[];
var options = {
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 68,    // minimum will be 0, unless there is a lower value.
                steps: 10,   // minimum value will be 0.
                stepValue: 1,
                max: 78
            }
        }]
    }
};
var data = {
    //labels: logTimeTemp.timeHistory,
    datasets: [
        {
            label: "Temperature",
            fill: false,
            borderColor: "#bae755",
            //borderDash: [5, 5],
            backgroundColor: "#e755ba",
            pointBackgroundColor: "#e755ba",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7",
            pointRadius: 5,
            //data: logTimeTemp.tempHistory
        }
      ]
    };

  var lineChart = new Chart(CHART, {
    type: 'line',
    data: data,
    options: options
  });
  function removeData() {
    lineChart.data.labels.splice(0, 1);
    lineChart.data.datasets[0].data.splice(0, 1);
    lineChart.update();
  }
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
function getTemp(){
  return Math.random() * 10 + 68;
}
function getCurrentTime() {
  var today = new Date();
  var time = today.getHours() +":" + today.getMinutes() + ":" + today.getSeconds();
  return time;
}
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
async function wait(ms){
  await sleep(ms);
}
function logTimeTemp(){
  var currentTemp;
  var currentTime;
  //window.tempHistory[i] = getTemp();
  //window.timeHistory[i] = getCurrentTime();
  currentTemp = getTemp();
  currentTime = getCurrentTime();

  //console.log(timeHistory);
  //console.log(tempHistory);
  //console.log(i);
  if (window.i > 4){
    addData(lineChart, currentTime, currentTemp);
    removeData(); //should remove element index 0
    //await sleep(1000);
  } else {
    addData(lineChart, currentTime, currentTemp);
    //await sleep(1000);
  }
  window.i++;
  }
  var myRefresh = setInterval(logTimeTemp, 1000);
