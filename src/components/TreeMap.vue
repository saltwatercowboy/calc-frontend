<template>
	<div class="treemap-container">
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
        plugins: {
          legend: {
            display: false
          },
        },
        layout: {
          padding: {
            left: 35,
            right: 10,
            top: 10,
            bottom: 10
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
  position: absolute;
  height: 100%; 
  width: 100%;
}

.treemap-container {
  position: relative;
  height: 90%;
  width: 100%;
}
</style>