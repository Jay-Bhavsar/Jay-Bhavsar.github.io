var ctx = document.getElementById("myChart").getContext("2d");
var cty = document.getElementById("myChart1").getContext("2d");
var cta = document.getElementById("myChart2").getContext("2d");
var ctb = document.getElementById("myChart3").getContext("2d");
var ctj = document.getElementById("myChart4").getContext("2d");
var ctk = document.getElementById("myChart5").getContext("2d");
var ctq = document.getElementById("myChart6").getContext("2d");


// var myChart4 = new Chart(ctj, {
//   type: "pie",
//   data: {
//     labels: ["CS", "IT", "BCA", "MCA"],
//     datasets: [
//       {
//         data: [725, 104, 195, 170],
//         backgroundColor: [
//           "rgba(255, 99, 132)",
//           "rgba(255, 159, 64)",
//           "rgba(255, 205, 86)",
//           "rgba(75, 192, 192)",
//         ],
//       },
//     ],
//   },
// });

var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["HP", "Samsung", "Amazon", "ZS", "Cloudera", "Adobe", "Commvault"],
    datasets: [
      {
        data: [40, 32, 11, 4, 2, 1, 1],
        label: "Companies",
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "#1087be",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
        ],
      },

      // {
      //   data: [2, 35, 62, 74, 15],
      //   backgroundColor:[
      //       "red","yellow","pink","green","purple"
      //   ],
      // },
    ],
  },
  //   options: {
  //     scales: {
  //          x: {
  //             grid: {
  //                display: false
  //             }
  //          },
  //          y: {
  //             grid: {
  //                display: false
  //             }
  //          }
  //     }
  //  }
});
var myChart1 = new Chart(cty, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022","2023"],
    datasets: [
      {
        // label: "Offers",
        data: [1039, 1057, 868, 1129, 1935, 1994, 2081,1800],
        barThickness: 30,
        backgroundColor: ["#1087be"],
      },
      // {
      //   data: [2, 35, 62, 74, 15],
      //   backgroundColor:[
      //       "red","yellow","pink","green","purple"
      //   ],
      // },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Years",
        },
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "No. of Offers",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
var myChart2 = new Chart(cta, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022","2023"],
    datasets: [
      {
        label: "Highest Package",
        data: [7, 10, 9, 41, 10, 12, 44,44],
        barThickness: 30,
        backgroundColor: ["#1087be"],
      },
      // {
      //   data: [2, 35, 62, 74, 15],
      //   backgroundColor:[
      //       "red","yellow","pink","green","purple"
      //   ],
      // },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Years",
        },
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Highest Package",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
var myChart3 = new Chart(ctb, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022","2023"],
    datasets: [
      {
        label: "Companies Visited",
        data: [48, 70, 89, 78, 58, 79, 170,200],
        barThickness: 30,
        backgroundColor: ["#1087be"],
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Years",
        },
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Companies Visited",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


var myChart4 = new Chart(ctj, {
  type: "pie",
  data: {
    labels: ["CS","IT","MCA","BCA"],
    datasets: [
      {
        label: "Companies Visited",
        data: [725,104,195,170],
        barThickness: 20,
        backgroundColor: [ "#80ffdb",
        "#1087be",
        "#fcf6bd",
        "#f94144"],
      },
    ],
  },
  
});


var myChart5 = new Chart(ctk, {
  type: "pie",
  data: {
    labels: ["ECE","EE","ME","CE"],
    datasets: [
      {
        label: "Companies Visited",
        data: [240,104,61,161],
        barThickness: 20,
        backgroundColor: [  "#80ffdb",
        "#1087be",
        "#fcf6bd",
        "#f94144"],
      },
    ],
  },
 
});


var myChart6 = new Chart(ctq, {
  type: "pie",
  data: {
    labels: ["MBA","BBA","B.COM","LAW","BJMC","SCIENCES","DESIGN","HM"],
    datasets: [
      {
        label: "Companies Visited",
        data: [48, 70, 89, 78, 58, 79, 170],
        barThickness: 20,
        backgroundColor: [     
        "#f94144",
        "#ff758f",
        "#4cc9f0",
        "#80ffdb",
        "#1087be",
        "#fcf6bd",
        "#b9faf8"

      ],
      },
    ],
  },
 
});

