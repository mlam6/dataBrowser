myData = JSON.parse(myData);
console.log(myData);
 
var clicked = "";
var chart;
function updateChartType() {
    chart.destroy(); 
    createFunction(clicked);
}
 
createFunction(clicked);
function createFunction(clicked) {
    chart = c3.generate({
        bindto: '#chart',
        data: {
           columns: [
                myData[0].results[0].val,
                myData[0].results[1].val
 
                // Used for testing
                //['data1', 30, 200, 100, 400, 150, 250, 200, 300, 260],
                //['data2', 50, 20, 10, 40, 15, 25, 30, 23, 26]
            ],
            type: clicked
       },
       subchart: {
            show: true
       },
       color: {
            pattern: ['#FF0000', '#666666']
       },
       size: {
            height: 450,
       },
    });
}

