<template>
  <canvas ref="chartCanvas"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'ChartJs',
  props: {
    type: String,
    data: {},
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    data: {
      deep: true,
      handler(newData) {
        if (this.chart) {
          this.chart.data = newData;
          this.chart.update();
        }
      },
    },
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas;
      if (!ctx) {
        console.error('Canvas element not found.');
        return;
      }

      this.chart = new Chart(ctx, {
        type: this.type,
        data: this.data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          layout: {
            padding: {
              top: 25,
              bottom: 20,
              left: 5
            },
          },
          chart: {
            color: 'white'
          },
          scales: {
            x: {
              ticks: {
                color: '#ccc'
              }
            },
            y: {
              ticks: {
                color: '#ccc'
              }
            },
          }
        },
      });
    },
  },
};
</script>

<style>

</style>
