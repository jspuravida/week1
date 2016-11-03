var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



  // console.log("Bombardier's total revenue is: " + bombardierTotal);
  // console.log("Bombardier's total tax is: " + (bombardierTotal * salesTaxRates["SK"]));

  // console.log("Telus BC's total revenue is: " + telusBcTotal);


  // console.log("Telus SK's total revenue is: " + telusSkTotal);

function sum(list) {
  var sum = 0;
  for(var j = 0; j < list.length; j++) {
    sum += list[j];
  }
  return sum;
}

function calculateTotalSales(name) {
  var sales = 0;

  for (var i = 0; i < companySalesData.length; i++) {
    if(name === companySalesData[i]["name"])
    {
      sales += sum(companySalesData[i]["sales"]);
    }
  }
  return sales;
}

function totalTaxes(name) {
  var tax = 0;

  for (var i = 0; i < companySalesData.length; i++) {
    if(name === companySalesData[i]["name"]) {
      tax += salesTaxRates[companySalesData[i]["province"]]*sum(companySalesData[i]["sales"]);
    }
  }
  return tax;
}


function calculateSalesTax(salesData, taxRates) {
  var results = {};

  results["Telus"] = {
    totalSales: calculateTotalSales("Telus"),
    totalTaxes: totalTaxes("Telus")
  };
  results["Bombardier"] = {
    totalSales: calculateTotalSales("Bombardier"),
    totalTaxes: totalTaxes("Bombardier")
  };

  return results;
}

  // var telusTotal = (telusBcTotal + telusSkTotal);
  // var telusTaxTotal = (telusBcTotal * salesTaxRates["BC"])+(telusSkTotal * salesTaxRates["SK"]);


  // var bombardierTotal = bombardierTotal;
  // var bombardierTaxTotal = (bombardierTotal * salesTaxRates["AB"]);


  // var telusObj = {};
  // var bombardierObj = {};





var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
// */