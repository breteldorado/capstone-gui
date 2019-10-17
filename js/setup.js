
function onSubmit() {
  //pull values
  var z1Select = document.getElementById('z1Select').value;
  var z2Select = document.getElementById('z2Select').value;
  var z3Select = document.getElementById('z3Select').value;
  var z4Select = document.getElementById('z4Select').value;

  var d1Op = document.getElementById('d1Operation').value;
  var d2Op = document.getElementById('d2Operation').value;
  var d3Op = document.getElementById('d3Operation').value;
  var d4Op = document.getElementById('d4Operation').value;
  var d5Op = document.getElementById('d5Operation').value;
  var d6Op = document.getElementById('d6Operation').value;
  var d7Op = document.getElementById('d7Operation').value;
  var d8Op = document.getElementById('d8Operation').value;

  var d1Select = document.getElementById('d1Select').value;
  var d2Select = document.getElementById('d2Select').value;
  var d3Select = document.getElementById('d3Select').value;
  var d4Select = document.getElementById('d4Select').value;
  var d5Select = document.getElementById('d5Select').value;
  var d6Select = document.getElementById('d6Select').value;
  var d7Select = document.getElementById('d7Select').value;
  var d8Select = document.getElementById('d8Select').value;

  var d1Optional = document.getElementById('d1Optional').value;
  var d2Optional = document.getElementById('d2Optional').value;
  var d3Optional = document.getElementById('d3Optional').value;
  var d4Optional = document.getElementById('d4Optional').value;
  var d5Optional = document.getElementById('d5Optional').value;
  var d6Optional = document.getElementById('d6Optional').value;
  var d7Optional = document.getElementById('d7Optional').value;
  var d8Optional = document.getElementById('d8Optional').value;

  var coolingSystem = document.getElementById('coolingSystem').value;
  var anticipatorC = document.getElementById('anticipatorC').value;
  var coolingRunT = document.getElementById('coolingRunT').value;
  var coolingCycleT = document.getElementById('coolingCycleT').value;

  var heatingSystem = document.getElementById('heatingSystem').value;
  var anticipatorH = document.getElementById('anticipatorH').value;
  var heatingRunT = document.getElementById('heatingRunT').value;
  var heatingCycleT = document.getElementById('heatingCycleT').value;
  var overTemp = document.getElementById('overTemp').value;

  var errorCheck = 0; //1 = error
  var data = {
    zoneSetup: [z1Select, z2Select, z3Select, z4Select],
    damperSetup: [{
        operation: d1Op,
        location: d1Select,
        optional: d1Optional
      },
      {
        operation: d2Op,
        location: d2Select,
        optional: d2Optional
      },
      {
        operation: d3Op,
        location: d3Select,
        optional: d3Optional
      },
      {
        operation: d4Op,
        location: d4Select,
        optional: d4Optional
      },
      {
        operation: d5Op,
        location: d5Select,
        optional: d5Optional
      },
      {
        operation: d6Op,
        location: d6Select,
        optional: d6Optional
      },
      {
        operation: d7Op,
        location: d7Select,
        optional: d7Optional
      },
      {
        operation: d8Op,
        location: d8Select,
        optional: d8Optional
      }
    ],
    cooling: [coolingSystem,
      anticipatorC,
      coolingRunT,
      coolingCycleT
    ],
    heating: [heatingSystem,
      anticipatorH,
      heatingRunT,
      heatingCycleT,
      overTemp
    ]
  };
  console.log(data);
  //if any default, display an error
  //zonesetup.z1,z2,z3,z4 == "default"

    for (var i = 0; i < data.zoneSetup.length; i++) {
      if (data.zoneSetup[i] == "default") {
        onError();
        errorCheck = 1;
      }
    }
    //damperSetup.d1-d8.operation == "default"
    for (i = 0; i < data.damperSetup.length; i++) {
      if (data.damperSetup[i].operation == "default") {
        onError();
        errorCheck = 1;
      } else if ((data.damperSetup[i].location == "default") && (data.damperSetup[i].operation != "disabled")) {
        onError();
        errorCheck = 1;
      } else if ((data.damperSetup[i].optional == "default") && (data.damperSetup[i].operation != "disabled")) {
        onError();
        errorCheck = 1;
      }
    }
    //cooling.system, anticipator, runT, CycleT == "default"
    for (i = 0; i < data.cooling.length; i++) {
      if (data.cooling[i] == "default") {
        onError();
        errorCheck = 1;
      }
    }
    //heating.system, anticipator, runT, CycleT == "default"
    for (i = 0; i < data.heating.length; i++) {
      if (data.heating[i] == "default") {
        onError();
        errorCheck = 1;
      }
    }
    // if no default values exist, write the file
  if (errorCheck == 0) {
    console.log("I am about to enter the writefile function");
    writeMyFile(data);
  }
  console.log("error check =  " + errorCheck);
}


function writeMyFile(data) {
  console.log("I have made it to the function");
  let header = ["Parameter", "Config \n"];
  var parameter = ["zone1,", "zone2,", "zone3,", "zone4,", "d1Operation,", "d2Operation,",
    "d3Operation,", "d4Operation,", "d5Operation,", "d6Operation,", "d7Operation,",
    "d8Operation,", "d1Z,", "d2Z,", "d3Z,", "d4Z,", "d5Z,", "d6Z,", "d7Z,", "d8Z,",
    "d1Optional,", "d2Optional,", "d3Optional,", "d4Optional,", "d5Optional,", "d6Optional,",
    "d7Optional,", "d8Optional,", "sysCool,", "antCool,", "coolRunT,", "coolCycleT,", "sysHeat,",
    "antHeat,", "heatRunT,", "heatCycleT,", "overTemp,"
  ];

  var config = []
  var i;
  //zones
  for (i = 0; i < data.zoneSetup.length; i++) {
    config.push(data.zoneSetup[i] + "\n");
  }
  //dampers
  //operation
  for (i = 0; i < data.damperSetup.length; i++) {
    config.push(data.damperSetup[i].operation + "\n");
  }
  //location
  for (i = 0; i < data.damperSetup.length; i++) {
    config.push(data.damperSetup[i].location + "\n");
  }
  //optional
  for (i = 0; i < data.damperSetup.length; i++) {
    config.push(data.damperSetup[i].location + "\n");
  }
  //cooling
  for (i = 0; i < data.cooling.length; i++) {
    config.push(data.cooling[i] + "\n");
  }
  //heating
  for (i = 0; i < data.heating.length; i++) {
    config.push(data.heating[i] + "\n");
  }
  var dataArray = [header];
  for (var i = 0; i < parameter.length; i++) {
    dataArray.push(parameter[i]);
    dataArray.push(config[i]);
  }
  var dataString = dataArray.join("");
  console.log(dataString);
  console.log("length of dataArray = " + dataArray.length);
  console.log("length of config = " + config.length);
  console.log("length of parameter = " + parameter.length);
  //write csv file
}

function onError() {
  //just change css font color values to red that are on default?
  console.log("not everything is filled out!!!");
}
