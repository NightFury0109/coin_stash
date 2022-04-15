<script>
  import ApexCharts from "apexcharts";

  import { onMount } from "svelte";
  // import Gauge from "gaugeJS";

  onMount(() => {
    var options = {
      series: [50],
      // colors: ["#ff1a1a"],
      chart: {
        height: 320,
        type: "radialBar",
        offsetY: -10,
        // toolbar: {
        //   show: true,
        // },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          // track: {
          //   background: "#333",
          //   startAngle: -45,
          //   endAngle: 45,
          // },
          dataLabels: {
            name: {
              fontSize: "18px",
              color: "#0a5b76",
              offsetY: 75,
            },
            value: {
              offsetY: -10,
              fontSize: "22px",
              color: "#0a5b76",
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        colors: ["#20E647"],
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.3,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.8,
          // gradientToColors: ["#ff1a1a"],
          stops: [0, 100],
        },
      },
      stroke: {
        dashArray: 0,
      },
      labels: ["LTV Ratio"],
    };

    let chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  });
</script>

<div id="chart" />

<style>
</style>
