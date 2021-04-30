demo = {
  initPickColor: function () {
    $(".pick-class-label").click(function () {
      var new_class = $(this).attr("new-class");
      var old_class = $("#display-buttons").attr("data-class");
      var display_div = $("#display-buttons");
      if (display_div.length) {
        var display_buttons = display_div.find(".btn");
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr("data-class", new_class);
      }
    });
  },

  initDocChart: function () {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
      layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 },
      },
    };

    ctx = document.getElementById("lineChartExample").getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    myChart = new Chart(ctx, {
      type: "doughnut",
      responsive: true,
      data: {
        labels: ["Men", "Women"],
        datasets: [
          {
            label: "Census",
            borderColor: "#f96332",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#f96332",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [623270258, 587584719],
          },
        ],
      },
      options: gradientChartOptionsConfiguration,
    });
  },

  initDashboardPageCharts: function () {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: 1,
      scales: {
        yAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
      layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 },
      },
    };

    gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: 0,
            gridLines: {
              zeroLineColor: "transparent",
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
      layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 },
      },
    };
    var State = [
      "Uttar Pradesh",
      "Maharastra",
      "Bihar",
      "West Bengal",
      "Andhra Pradesh",
      "Tamil Nadu",
      "Rajasthan",
      "Karnataka",
      "Gujarat",
      "Orissa",
      "Kerala",
      "Jharkhand",
      "Assam",
      "Panjab",
      "Chhattisgarh",
      "Haryana",
      "NCT of Delhi",
      "Jammu Kashmir",
      "Uttarakhand",
      "Himachal Pradesh",
      "Tripura",
      "Meghalay",
      "Manipur",
      "Nagaland",
      "Goa",
      "Arunachal Pradesh",
      "Puducherry",
      "Mizoram",
      "Chandigarh",
      "sikkim",
      "Anadaman-Nicobar",
      "Dadra-nagar Havelyi",
      "Daman-Div",
      "Lakshadweep",
    ];
    var population = [
      199581477,
      112372972,
      103804637,
      91347736,
      84665533,
      72138958,
      68621012,
      61130704,
      60383628,
      41947358,
      33387677,
      32966238,
      31169272,
      27704236,
      25540196,
      25353081,
      16753235,
      12548926,
      10116753,
      6856509,
      3671032,
      2964007,
      2721756,
      1980602,
      1457723,
      1382611,
      1244464,
      1091014,
      1054686,
      607688,
      379944,
      342853,
      242911,
      64429,
    ];
    var ctx = document.getElementById("bigDashboardChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 10, 200, 300);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: State,
        datasets: [
          {
            label: "Population",
            borderColor: chartColor,
            pointBorderColor: chartColor,
            pointBackgroundColor: "#000000",
            pointHoverBackgroundColor: "#000000",
            pointHoverBorderColor: chartColor,
            pointBorderWidth: 1,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: population,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0,
          },
        },
        maintainAspectRatio: false,

        scales: {
          y: {
            display: false,
          },
        },
      },
    });
    var doughnutOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      responsive: true,
    };
    ctx = document.getElementById("literacybarchart").getContext("2d");

    var label = ["urban-men", "urban-women", "rular-men", "rular-women"];
    var data = [153402248, 127442729, 281361374, 201432461];
    myChart = new Chart(ctx, {
      type: "bar",
      responsive: true,
      data: {
        labels: ["urban-men", "urban-women", "rular-men", "rular-women"],
        datasets: [
          {
            label: "Literal",
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 123, 132)",
              "rgb(123, 162, 235)",
            ],
            data: data,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: true,
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            display: false,
          },
        },
      },
    });

    ctx = document.getElementById("lineChartExample").getContext("2d");
    myChart = new Chart(ctx, {
      type: "doughnut",
      responsive: true,
      data: {
        labels: ["Men", "Women"],
        datasets: [
          {
            label: "Active Users",
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            data: [623270258, 587584719],
          },
        ],
      },
      options: doughnutOptionsConfiguration,
    });

    ctx = document
      .getElementById("lineChartExampleWithNumbersAndGrid")
      .getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    var label = ["literate", "illiterate"];
    var data = [482793835 + 280844977, 350955017 + 96261148];
    myChart = new Chart(ctx, {
      type: "doughnut",
      responsive: true,
      data: {
        labels: label,
        datasets: [
          {
            label: "Email Stats",
            borderColor: "#18ce0f",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#18ce0f",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            data: data,
          },
        ],
      },
      options: doughnutOptionsConfiguration,
    });

    var e = document
      .getElementById("barChartSimpleGradientsNumbers")
      .getContext("2d");

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    var label = ["Hindu", "Muslim", "Christian", "Shikh", "Others"];
    var data = [966257353, 172245158, 27819588, 20833116, 23699762];
    var a = {
      type: "doughnut",
      data: {
        labels: label,
        datasets: [
          {
            label: "Religions",
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 99, 50)",
              "rgb(54, 162, 235)",
              "rgb(255, 123, 132)",
              "rgb(123, 162, 23)",
            ],
            borderColor: "#2CA8FF",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#2CA8FF",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 1,
            data: data,
          },
        ],
      },
      options: doughnutOptionsConfiguration,
    };

    var viewsChart = new Chart(e, a);
  },

  initGoogleMaps: function () {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }, { lightness: 17 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 18 }],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 16 }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#dedede" }, { lightness: 21 }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            { visibility: "on" },
            { color: "#ffffff" },
            { lightness: 16 },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            { saturation: 36 },
            { color: "#333333" },
            { lightness: 40 },
          ],
        },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{ color: "#fefefe" }, { lightness: 20 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
        },
      ],
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!",
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function (from, align) {
    color = "primary";

    $.notify(
      {
        icon: "now-ui-icons ui-1_bell-53",
        message:
          "Welcome to <b>Now Ui Dashboard Pro</b> - a beautiful freebie for every web developer.",
      },
      {
        type: color,
        timer: 8000,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  },
};
