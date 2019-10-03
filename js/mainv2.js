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
    var chart = new Chart(ZONECHART, {
     type: 'line',
     options: options,
     data: {
       labels: timeLabel,
       datasets: [
         {
           label: "Zone 1 Temperature",
           data: zone1t
         }
       ]

     }
   });
 }

 d3.csv('./zoneData.csv')
   .then(makeChart);
