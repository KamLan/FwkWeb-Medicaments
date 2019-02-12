<template>
  <div class="medium">
    <div v-if="!loading">
      <div class="chart">
        <BarChart :chart-data="datacollectionCountry"></BarChart>
      </div>
      <div class="chart">
        <LineChart :chart-data="datacollectionCity"></LineChart>
      </div>
    </div>
    <div v-else>
      <div class="loaderBar">
        <BarLoader style="width: 50%; margin-left: 25%; margin-top:10%; margin-bottom:10%;">
        </BarLoader>
      </div>
    </div>
    <div class="refreshButton">
      <button @click="fillData()">Refresh</button>
    </div>
    <!-- <div>
      <h4>Pharmacies par pays</h4>
      {{ pharmaciesStatCountry }}
      <h4>Pharmacies par ville</h4>
      {{ pharmaciesStatCity }}
    </div>-->
  </div>
</template>

<script>
import BarChart from "./../scripts/Barchart.js";
import LineChart from "./../scripts/LineChart.js";
import { BarLoader } from "@saeris/vue-spinners";
export default {
  components: {
    BarChart,
    LineChart,
    BarLoader
  },
  data() {
    return {
      pharmaciesStatCountry: this.DataPharmaciesStatCountry(),
      pharmaciesStatCity: this.DataPharmaciesStatCity(),
      drugs: null,
      requests: null,
      datacollectionCountry: null,
      datacollectionCity: null,
      loading:true
    };
  },
  beforeCreate() {
    this.loading=true
    // this.axios
    //   .get("http://163.172.167.185:3000/v1/drugs/label/ibuprofen")
    //   .then(response=>(this.drugs = response.data))
    // this.axios
    //   .get("http://163.172.167.185:3000/v1/request")
    //   .then(response=>(this.requests = response.data))
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.fillDataPharmaCountry();
      this.fillDataPharmaCity();
      // this.loading=false;
    },
    fillDataPharmaCountry() {
      // eslint-disable-next-line
      console.log("pharmacies", this.pharmaciesStatCountry);
      var StatCountry = [];
      var StatCountryNumber = [];
      if (this.pharmaciesStatCountry !== undefined) {
        for (var i = 0; i < this.pharmaciesStatCountry.length; i++) {
          StatCountry.push(this.pharmaciesStatCountry[i].pays);
          StatCountryNumber.push(this.pharmaciesStatCountry[i].countPays);
        }
        this.datacollectionCountry = {
          labels: StatCountry,
          datasets: [
            {
              label: "Countries",
              backgroundColor: "#FF0000",
              data: StatCountryNumber
            }
          ]
        };
        this.loading = false;
      }
    },
    fillDataPharmaCity() {
      // eslint-disable-next-line
      console.log("cities", this.pharmaciesStatCity);
      var StatCity = [];
      var StatCityNumber = [];
      if (this.pharmaciesStatCity !== undefined) {
        for (var i = 0; i < this.pharmaciesStatCity.length; i++) {
          StatCity.push(this.pharmaciesStatCity[i].city);
          StatCityNumber.push(this.pharmaciesStatCity[i].countCity);
        }
        this.datacollectionCity = {
          labels: StatCity,
          datasets: [
            {
              label: "Cities",
              backgroundColor: "#01DF3A",
              data: StatCityNumber
            }
          ]
        };
        this.loading = false;
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    DataPharmaciesStatCountry() {
      this.axios
        .get("http://163.172.167.185:3000/v1/pharmacies/stat/country")
        .then(response => (this.pharmaciesStatCountry = response.data));
    },
    DataPharmaciesStatCity() {
      this.axios
        .get("http://163.172.167.185:3000/v1/pharmacies/stat/city")
        .then(response => (this.pharmaciesStatCity = response.data));
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
div.chart {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}
div.refreshButton {
  margin-bottom: 10%;
}
div.loaderBar {
  width: 50%;
  margin-left: 25%;
}
</style>