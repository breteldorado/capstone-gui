const CHART = document.getElementById("myChart");
console.log(CHART);

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            //fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(75,192,192,1)",
            pointColor: "rgba(75,192,192,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(75,192,192,1)",
            data: [65, 59, 80, 81, 16, 55, 40]
        }
      ]
    };

var lineChart = new Chart(CHART, {
  type: 'line',
  data: data
});
