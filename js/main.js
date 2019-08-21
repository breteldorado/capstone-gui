const CHART1 = document.getElementById("zoneSensor-1").getContext('2d');
const CHART2 = document.getElementById("zoneSensor-2").getContext('2d');
const CHART3 = document.getElementById("zoneSensor-3").getContext('2d');
const CHART4 = document.getElementById("zoneSensor-4").getContext('2d');
const CHART5 = document.getElementById("ahuSensor-1").getContext('2d');
const CHART6 = document.getElementById("ahuSensor-2").getContext('2d');

var i = 0; //loop counter
var tempHistory=[];
var timeHistory=[];
//configure options
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
//set data for each linechart
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
var data3 = {
    datasets: [
        {
            label: "ZSU 3 Temperature",
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
var data4 = {
    datasets: [
        {
            label: "ZSU 4 Temperature",
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
var data5 = {
    datasets: [
        {
            label: "ESU 1 Temperature",
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
var data6 = {
    datasets: [
        {
            label: "ESU 2 Temperature",
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

//Create Linecharts
var lineChart = [];
lineChart[0] = new Chart(CHART1, {
  type: 'line',
  data: data1,
  options: options
});
lineChart[1] = new Chart(CHART2, {
  type: 'line',
  data: data2,
  options: options
});
lineChart[2] = new Chart(CHART3, {
  type: 'line',
  data: data3,
  options: options
});
lineChart[3] = new Chart(CHART4, {
  type: 'line',
  data: data4,
  options: options
});
lineChart[4] = new Chart(CHART5, {
  type: 'line',
  data: data5,
  options: options
});
lineChart[5] = new Chart(CHART6, {
  type: 'line',
  data: data6,
  options: options
});
  // var lineChart1 = new Chart(CHART1, {
  //   type: 'line',
  //   data: data1,
  //   options: options
  // });
  // var lineChart2 = new Chart(CHART2, {
  //   type: 'line',
  //   data: data2,
  //   options: options
  // });
  // var lineChart3 = new Chart(CHART3, {
  //   type: 'line',
  //   data: data3,
  //   options: options
  // });
  // var lineChart4 = new Chart(CHART4, {
  //   type: 'line',
  //   data: data4,
  //   options: options
  // });
  // var lineChart5 = new Chart(CHART5, {
  //   type: 'line',
  //   data: data5,
  //   options: options
  // });
  // var lineChart6 = new Chart(CHART6, {
  //   type: 'line',
  //   data: data6,
  //   options: options
  // });

function removeData(chart) { //removes element 1 of chart
  chart.data.labels.splice(0, 1);
  chart.data.datasets[0].data.splice(0, 1);
  chart.update();
}
function addData(chart, label, data) { //adds data to the end of the chart
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
  var currentTemp = [];
  var currentTime;
  var i = 0;
  var j = 0;
  for (i = 0; i < 6; i++) {
    currentTemp[i] = getTemp();
  }
  currentTime = getCurrentTime();
  if (window.i > 4){
    for (j = 0; j < 6; j++) {
      addData(lineChart[j], currentTime, currentTemp[j]);
      removeData(lineChart[j]);
    }
  } else {
    for (j = 0; j < 6; j++) {
      addData(lineChart[j], currentTime, currentTemp[j]);
    }
  }
  window.i++;
  }
  logTimeTemp();
  var myRefresh = setInterval(logTimeTemp, 5000);
