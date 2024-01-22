<template>
  <div>
    <canvas id="treemap-chart"></canvas>
  </div>
</template>
  
<script>
import Chart from 'chart.js/auto';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';

Chart.register(TreemapController, TreemapElement);

export default {
  name: 'ChartJs',
  props: {
    type: String,
    data: {}
  },

  mounted() {
    const chrt = document.getElementById('treemap-chart');
    const treemapChart = new Chart(chrt, {
      type: this.type,
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        labels : {
          overflow: 'fit',
        }, 
        plugins: {
          legend: {
            display: false
          },
        },
        layout: {
          padding: {
            top: 15,
            right: 1,
          }
        },
      }
    });
    treemapChart;
  }

}
</script>

<style>

canvas {
  position: relative;
  height: 300px;
  width: 100%;
}

</style>