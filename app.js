// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    fillTable(inputValue);

});

function fillTable(date = "") {
    
    console.log(date);
    
    d3.select("tbody").selectAll("tr").remove();
    d3.select("tbody").selectAll("td").remove();

    var tbody = d3.select("tbody");

    data.forEach((report) => {

        if (date === report.datetime || date === "") {

            var row = tbody.append("tr");
            Object.entries(report).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
            });
        };
    });

};

fillTable();