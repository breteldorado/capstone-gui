const CHART1 = document.getElementById("zoneSensor-1");
const CHART2 = document.getElementById("zoneSensor-2");
const CHART3 = document.getElementById("zoneSensor-3");
const CHART4 = document.getElementById("zoneSensor-4");
const CHART5 = document.getElementById("ahuSensor-1");
const CHART6 = document.getElementById("ahuSensor-2");

let SENSORS = ["zsu1", "zsu2"]
//let datasets = ["zsu1", "zsu2", "zsu3", "zsu4", "ahu1", "ahu2"]

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


var data1 = {
    datasets: [
        {
            label: "ZSU 1 Temperature",
            fill: false,
            borderColor: "#bae755",
            backgroundColor: "#e755ba",
            pointBackgroundColor: "#e755ba",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7",
            pointRadius: 5

        }
      ]
    };

    var data2 = {
        datasets: [
            {
                label: "ZSU 2 Temperature",
                fill: false,
                borderColor: "#bae755",
                backgroundColor: "#e755ba",
                pointBackgroundColor: "#e755ba",
                pointBorderColor: "#55bae7",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
                pointRadius: 5,
            }
          ]
        };

  var lineChart1 = new Chart(CHART1, {
    type: 'line',
    data: data1,
    options: options
  });
  var lineChart2 = new Chart(CHART2, {
    type: 'line',
    data: data2,
    options: options
  });


  function removeData(chart) {
    chart.data.labels.splice(0, 1);
    chart.data.datasets[0].data.splice(0, 1);
    chart.update();
  }
// function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }
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
function logTimeTemp(sensor){
  var currentTemp;
  var currentTemp2;
  var currentTime;
  currentTemp = getTemp(); //temp 1
  currentTemp2 = getTemp(); //temp2
  currentTime = getCurrentTime();
  if (window.i > 4){
    addData(lineChart1, currentTime, currentTemp);
    removeData(lineChart1);
    addData(lineChart2, currentTime, currentTemp2);
    removeData(lineChart2);
  } else {
    addData(lineChart1, currentTime, currentTemp);
    addData(lineChart2, currentTime, currentTemp2);
  }
  window.i++;
  }
  var myRefresh = setInterval(logTimeTemp, 5000);
