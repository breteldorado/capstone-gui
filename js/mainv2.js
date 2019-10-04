const ZONECHART = document.getElementById("zoneGraph").getContext('2d');

function makeChart(zones) {
    var zone1t = zones.map(function(d) {return d.zone1T;});
    var zone1rh = zones.map(function(d) {return d.zone1RH;});
    var zone2t = zones.map(function(d) {return d.zone2T;});
    var zone2rh = zones.map(function(d) {return d.zone2RH;});
    var zone3t = zones.map(function(d) {return d.zone3T;});
    var zone3rh = zones.map(function(d) {return d.zone3RH;});
    var zone4t = zones.map(function(d) {return d.zone4T;});
    var zone4rh = zones.map(function(d) {return d.zone4RH;});
    var timeLabel = zones.map(function(d) {return d.Time;});
    var zoneSelection = document.getElementById('zoneSelect').value;

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

    var dataSelect = null;
    var labelSelect;
    //pass zoneSelect
    var zone = zoneSelection;
    console.log(zoneSelection);
    switch (zone) {
      case "zsu1":
      dataSelect = zone1t;
      labelSelect = "ZSU 1 Temperature";
      break;
      case "zsu2":
      dataSelect = zone2t;
      labelSelect = "ZSU 2 Temperature";
      break;
      case "zsu3":
      dataSelect = zone3t;
      labelSelect = "ZSU 3 Temperature";
      break;
      case "zsu4":
      dataSelect = zone4t;
      labelSelect = "ZSU 4 Temperature";
      break;
      default:
      dataSelect = 0;
      labelSelect = "Check your case structure";
    }
    console.log("dataselect = " + (dataSelect.length));
    //pass zonePeriod
    var chart = new Chart(ZONECHART, {
     type: 'line',
     options: options,
     data: {
       labels: timeLabel,
       datasets: [
         {
           label: labelSelect,
           data: dataSelect
         }
       ]

     }
   });
   console.log(chart.data.datasets[0].data.length);
   chart.reset();
   chart.update();
 }

 d3.csv('./zoneData.csv')
   .then(makeChart);
function updateChart() {
  d3.csv('./zoneData.csv')
    .then(makeChart);
}

document.getElementById("zoneSelect").addEventListener("change", updateChart);
