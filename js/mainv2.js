
function makeChart(zones) {

    var ZONECHART = document.getElementById("zoneGraph").getContext('2d');
    var zone1t = zones.map(function(d) {return d.zone1T;});
    var zone1rh = zones.map(function(d) {return d.zone1RH;});
    var zone2t = zones.map(function(d) {return d.zone2T;});
    var zone2rh = zones.map(function(d) {return d.zone2RH;});
    var zone3t = zones.map(function(d) {return d.zone3T;});
    var zone3rh = zones.map(function(d) {return d.zone3RH;});
    var zone4t = zones.map(function(d) {return d.zone4T;});
    var zone4rh = zones.map(function(d) {return d.zone4RH;});
    var timeLabel = zones.map(function(d) {return d.Time;});

    var timeSelection = document.getElementById('zonePeriod').value;
    var zoneSelection = document.getElementById('zoneSelect').value;
    var timeDiv;

    var newZ1T =[];
    var newZ2T =[];
    var newZ3T =[];
    var newZ4T =[];
    var newZ1RH =[];
    var newZ2RH =[];
    var newZ3RH =[];
    var newZ4RH =[];
    var newTime= [];
    var j = 0;

    var zones = {
      z1: {temp: zone1t, rh: zone1rh },
      z2: {temp: zone2t, rh: zone2rh },
      z3: {temp: zone3t, rh: zone3rh },
      z4: {temp: zone4t, rh: zone4rh }
    };
    switch (timeSelection) {
      case "oneHour":
      timeDiv = 5;
      //grab 23:00 - 24:00
      for (j = 1439 - 59; j < timeLabel.length; j++) {
        newTime.push(timeLabel[j]);
        newZ1T.push(zone1t[j]);
        newZ2T.push(zone2t[j]);
        newZ3T.push(zone3t[j]);
        newZ4T.push(zone4t[j]);
        newZ1RH.push(zone1rh[j]);
        newZ2RH.push(zone2rh[j]);
        newZ3RH.push(zone3rh[j]);
        newZ4RH.push(zone4rh[j]);
      }
      break;
      case "sixHours":
        timeDiv = 15;
        //grab 18:00 - 24:00
        for (j = 1439 - 359; j < timeLabel.length; j++) {
          newTime.push(timeLabel[j]);
          newZ1T.push(zone1t[j]);
          newZ2T.push(zone2t[j]);
          newZ3T.push(zone3t[j]);
          newZ4T.push(zone4t[j]);
          newZ1RH.push(zone1rh[j]);
          newZ2RH.push(zone2rh[j]);
          newZ3RH.push(zone3rh[j]);
          newZ4RH.push(zone4rh[j]);
        }
        break;
      case "twelveHours":
        timeDiv = 30;
        //grab 12:00 - 24:00
        for (j = 1439 - 719; j < timeLabel.length; j++) {
          newTime.push(timeLabel[j]);
          newZ1T.push(zone1t[j]);
          newZ2T.push(zone2t[j]);
          newZ3T.push(zone3t[j]);
          newZ4T.push(zone4t[j]);
          newZ1RH.push(zone1rh[j]);
          newZ2RH.push(zone2rh[j]);
          newZ3RH.push(zone3rh[j]);
          newZ4RH.push(zone4rh[j]);
        }
        break;
      case "oneDay":
        timeDiv = 60;
        newTime = timeLabel;
        newZ1T = zone1t;
        newZ2T = zone2t;
        newZ3T = zone3t;
        newZ4T = zone4t;
        newZ1RH = zone1rh;
        newZ2RH = zone2rh;
        newZ3RH = zone3rh;
        newZ4RH = zone4rh;
        break;
      default:
        timeDiv = 1;
        console.log("check your time division");
    }
    console.log("TIME SELECTED = " + newTime.length + " MINUTES"); //<---------------------- debug
    //grab the data every 60 minutes
    var i;
    var spacedTime =[];
    var spacedZ1T =[];
    var spacedZ2T =[];
    var spacedZ3T =[];
    var spacedZ4T =[];
    for (i = 0; i < newTime.length; i++) {
      //if index of timeLabel % 60 == 0, store that index of TimeLabel into new TimeLabel
      if (newTime.indexOf(newTime[i]) % timeDiv == 0) {
        spacedTime.push(newTime[i]);
        spacedZ1T.push(newZ1T[i]);
        spacedZ2T.push(newZ2T[i]);
        spacedZ3T.push(newZ3T[i]);
        spacedZ4T.push(newZ4T[i]);
      }
    }
    console.log("DATA POINTS DISPLAYED = " + spacedTime.length);
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
    console.log("ZONE SELECTION = " + zoneSelection);
    switch (zone) {
      case "zsu1":
      dataSelect = spacedZ1T;
      labelSelect = "ZSU 1 Temperature";
      break;
      case "zsu2":
      dataSelect = spacedZ2T;
      labelSelect = "ZSU 2 Temperature";
      break;
      case "zsu3":
      dataSelect = spacedZ3T;
      labelSelect = "ZSU 3 Temperature";
      break;
      case "zsu4":
      dataSelect = spacedZ4T;
      labelSelect = "ZSU 4 Temperature";
      break;
      default:
      dataSelect = 0;
      labelSelect = "Check your case structure";
    }
    //pass zonePeriod
    var chart = new Chart(ZONECHART, {
     type: 'line',
     options: options,
     data: {
       labels: spacedTime,
       datasets: [
         {
           label: labelSelect,
           fill: false,
           borderColor: "#000",
           backgroundColor: "#FFF",
           data: dataSelect
         }
       ]

     }
   });
   console.log("CHART.DATASETS.LENGTH = " + chart.data.datasets.length);
   console.log("CHART.DATASETS.DATA.LENGTH = " + chart.data.datasets[0].data.length);
   chart.reset();
   chart.update();
   console.log("---------------------------------------------------");
 }

 d3.csv('data/zoneData.csv')
   .then(makeChart);
function updateChart() {
  d3.csv('data/zoneData.csv')
    .then(makeChart);
}

document.getElementById("zoneSelect").addEventListener("change", updateChart);
document.getElementById("zonePeriod").addEventListener("change", updateChart);
