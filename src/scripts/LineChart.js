import { Line, mixins, Bar } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, {
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true // minimum value will be 0.
            }
          }
        ]
      }
    })
  }
}