<template>
    <html>
        <meta name="viewport" content="width=device-width">
        <main>
            <component v-if="isScreenSmall" :is="smallBar" :computedData="datasetSummaries"></component>
            <component v-else :is="largeBar" @show-entry="showEntry" @hide-entry="hideEntry"></component>    
            <div class="fullback">
                <div class="treemap-card">
                    <span class="treemap-label">{{ treeName }}
                    </span>
                    <div id="treemap-container">
                        <TreeMap :type="treemap" :data="treemapData" />
                    </div>
                </div>
                <div class="summary-card">
                    <div class="summary-list">
                        <div class="summary-sublabel">Kilogrammes CO2 Emitted</div>
                        <div class="summary-single" v-for="summary in datasetSummaries" :key="summary.label">
                            <span class="summary-text">{{ summary.label }}: {{ summary.sum }} kgCO2e ({{ summary.year }})</span>
                        </div>
                    </div>
                    <div class="targets-label">
                        Your Targets
                        <div id="underline-green"></div>
                    </div>
                    <div class="targets-list">
                        <div class="target-single">
                            <span class="target-text">[Target 1 Name] Monthly Emissions &lt;=133 kgCO2e</span>
                        </div>
                        <div class="target-single">
                            <span class="target-text">[Target 2 Name] Cato ferrata</span>
                        </div>
                        <button @click="showNotification">Example Tip</button>
                    </div>
                </div>
                <div class="linechart-card">
                    <span class="line-label">{{ selectedYear }} {{ lineName }} {{ selectedType }} (kgCO2e)
                    </span>
                    <div class="linechart-container">
                        <Chart :type="line" :data="filteredLineData" />
                    </div>
                </div>
                <div class="graph-options">
                    <span class="graph-options-label">Options</span>
                    <DropDownScope />
                    <DropDownType @update-type="updateSelectedType"/>
                    <DropDownYear @update-year="updateSelectedYear"/>
                    <DropDownUnit />

                </div>
            </div>
            <TabularEntry :displayEntry="isEntryVisible" @close="close-entry"/>
        </main>
    </html>
</template>

<script>
import { useToast, POSITION } from "vue-toastification";

import DashNavigator from './DashNavigator.vue'
import DashNavigatorMobile from './DashNavigatorMobile.vue'
import TreeMap from './TreeMap.vue'
import Chart from './Chart.vue'
import DropDownType from './DropDownType.vue'
import DropDownScope from './DropDownScope.vue'
import DropDownYear from './DropDownYear.vue'
import DropDownUnit from './DropDownUnit.vue'
import TabularEntry from './TabularEntry.vue'
import SummaryPopUp from './SummaryPopUp.vue'

export default {

    name: 'DashHome',

    components: {
        DashNavigator,
        DashNavigatorMobile,
        TreeMap,
        Chart,
        DropDownType,
        DropDownScope,
        DropDownYear,
        DropDownUnit,
        TabularEntry,
        SummaryPopUp
    },

    setup() {
        const toast = useToast();
        return { toast }
    },

    data() {

        return {

            smallBar: 'DashNavigatorMobile',
            largeBar: 'DashNavigator',

            isSummaryPopupVisible: false,

            isEntryVisible: false,

            screenWidth: window.innerWidth,

            lineName: ' Emissions: ',
            line: 'line',
            selectedYear: 'All Time',
            selectedType: 'All Types',
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                {
                        backgroundColor: "rgba(58, 75, 234, 0.5)",
                        borderColor: "rgb(167, 166, 155)",
                        data: [54, 147, 175, 105, 133, 38, 48, 103, 36, 85, 191, 142],
                        fill: true,
                        label: "Asset #1",
                        scope: 1,
                        tension: 0.1,
                        emissiontype: "Fuels",
                        year: 2021
                    },
                    {
                        backgroundColor: "rgba(48, 74, 78, 0.5)",
                        borderColor: "rgb(32, 231, 220)",
                        data: [105, 194, 192, 44, 134, 185, 131, 50, 194, 169, 157, 34],
                        fill: true,
                        label: "Asset #1",
                        scope: 1,
                        tension: 0.1,
                        emissiontype: "Fuels",
                        year: 2022
                    }, 
                    {
                        backgroundColor: "rgba(61, 248, 76, 0.5)",
                        borderColor: "rgb(167, 96, 167)",
                        data: [160, 75, 149, 130, 124, 84, 79, 57, 132, 193, 153, 26],
                        fill: true,
                        label: "Asset #1",
                        scope: 1,
                        tension: 0.1,
                        emissiontype: "Fuels",
                        year: 2023
                    },
                    {
                        backgroundColor: "rgba(210, 137, 54, 0.5)",
                        borderColor: "rgb(79, 138, 80)",
                        data: [163, 190, 150, 132, 194, 188, 192, 99, 107, 61, 29, 153],
                        fill: true,
                        label: "Asset #2",
                        scope: 2,
                        tension: 0.1,
                        emissiontype: "Transport",
                        year: 2021
                    }, 
                    {
                        backgroundColor: "rgba(235, 199, 231, 0.5)",
                        borderColor: "rgb(3, 171, 128)",
                        data: [117, 154, 91, 58, 41, 37, 179, 101, 35, 132, 43, 38],
                        fill: true,
                        label: "Asset #2",
                        scope: 2,
                        tension: 0.1,
                        emissiontype: "Transport",
                        year: 2022
                    }, 
                    {
                        backgroundColor: "rgba(162, 244, 43, 0.5)",
                        borderColor: "rgb(186, 146, 45)",
                        data: [72, 145, 124, 42, 167, 57, 195, 151, 95, 85, 122, 101],
                        fill: true,
                        label: "Asset #2",
                        scope: 2,
                        tension: 0.1,
                        emissiontype: "Transport",
                        year: 2023
                    },
                    {
                        backgroundColor: "rgba(90, 180, 253, 0.5)",
                        borderColor: "rgb(145, 216, 71)",
                        data: [56, 33, 196, 59, 51, 147, 84, 72, 124, 181, 35, 68],
                        fill: true,
                        label: "Asset #3",
                        scope: 3,
                        tension: 0.1,
                        emissiontype: "Travel",
                        year: 2021
                    }, 
                    {
                        backgroundColor: "rgba(20, 232, 52, 0.5)",
                        borderColor: "rgb(242, 164, 142)",
                        data: [55, 51, 173, 178, 82, 29, 60, 181, 120, 82, 196, 97],
                        fill: true,
                        label: "Asset #3",
                        scope: 3,
                        tension: 0.1,
                        emissiontype: "Travel",
                        year: 2022
                    },            
                    {
                        backgroundColor: "rgba(33, 132, 230, 0.5)",
                        borderColor: "rgb(237, 223, 87)",
                        data: [139, 92, 145, 167, 21, 97, 63, 51, 79, 102, 134, 180],
                        fill: true,
                        label: "Asset #3",
                        scope: 3,
                        tension: 0.1,
                        emissiontype: "Travel",
                        year: 2023
                    }
                ],
            },
            filteredLineData: this.lineData,

            treeName: '2021 Emissions by Asset: kgCO2e',
            treemap: 'treemap',
            treemapData: {
                datasets: [
                    {
                        data: [
                            { category: 'Asset 1', Emitted: 1257, color: 'rgb(255, 255, 255)' }, 
                            { category: 'Asset 2', Emitted: 1658, color: 'rgb(255, 255, 255)' }, 
                            { category: 'Asset 3', Emitted: 1106, color: 'rgb(255, 255, 255)' }, 
                            { category: 'Asset 4', Emitted: 502, color: 'rgb(255, 255, 255)' }, 
                            { category: 'Asset 5', Emitted: 117, color: 'rgb(255, 255, 255)' }, 
                            { category: 'Asset 6', Emitted: 55, color: 'rgb(255, 255, 255)' }, 
                            { category: 'Asset 7', Emitted: 555, color: 'rgb(255, 255, 255)' }, 
                        ],
                        
                        borderWidth: .5,
                        borderColor: '#343837',
                        borderRadius: 0,
                        label: 'My treemap dataset',
                        labels: {
                            display: true,
                            color: 'white',
                            font: 'Raleway',
                            position: 'top',
                            align: 'left',
                            formatter: (ctx) => [ctx.raw._data.category, ctx.raw.v + ' kgCO2e']
                        },
                        groups: ['category'],
                        key: 'Emitted',
                        backgroundColor: '#03719C'

                    }
                ],
            },
        };
    },

    computed: {
        isScreenSmall() {
            return this.screenWidth < 688;
        },

        datasetSummaries: function() {
            this.updateFilteredData()
            return this.filteredLineData.datasets.map(dataset => {
                const sum = dataset.data.reduce((acc, currentValue) => acc + currentValue, 0);
                    return {
                        label: dataset.label,
                        sum: sum,
                        year: dataset.year
                    };
            });
        },
    },

    mounted() {
        window.addEventListener('resize', this.updateScreenWidth);
        this.updateFilteredData();
    },

    unmounted() {
        window.removeEventListener('resize', this.updateScreenWidth);
    },

    watch: {
        selectedYear(newYear) {
            this.updateFilteredData();
        },

        selectedType(newType) {
            this.updateFilteredData();
        },

    },

    methods: {

        showNotification() {
            this.toast.info("A similar company reduced their {yearly/quarterly/monthly} emissions profile for {Asset n} by {X%} using {another form of transportation Y / a different material Z}. Click for more information.", 
            { position: POSITION.BOTTOM_RIGHT,
              timeout: 12000,
            });
        },

        showSummaryPopup() {
			this.isSummaryPopupVisible = true;
		},

		hideSummaryPopup() {
      		this.isSummaryPopupVisible = false;
    	},

        showEntry() {
			this.isEntryVisible = true;
		},

        hideEntry() {
            this.isEntryVisible = false;
        },

        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        },

        updateSelectedYear(newYear) {
            this.selectedYear = newYear;
            this.updateFilteredData();
            console.log('Selected Year:', this.selectedYear);
        },

        updateSelectedType(newType) {
            this.selectedType = newType;
            this.updateFilteredData(); 
            console.log('Selected Type:', this.selectedType);
        },

        updateFilteredData() {
            if (this.selectedYear !== 'All Time' && this.selectedType !== 'All Types') {
                const yearFilteredData = this.filterDataByYear(this.selectedYear);
                this.filteredLineData = this.filterDataByType(this.selectedType, yearFilteredData);
            } else if (this.selectedYear !== 'All Time') {
                this.filteredLineData = this.filterDataByYear(this.selectedYear);
            } else if (this.selectedType !== 'All Types') {
                this.filteredLineData = this.filterDataByType(this.selectedType);
            } else {
                this.filteredLineData = {
                    datasets: this.lineData.datasets,
                    labels: this.lineData.labels,
                };
            }
        },

        filterDataByYear(year, data = null) {
            const filteredData = data || {
                datasets: this.lineData.datasets,
                labels: this.lineData.labels,
            };

            if (year !== 'All') {
                filteredData.datasets = filteredData.datasets.filter(dataset => dataset.year === year);
            }

            console.log('Filtered data by year:', filteredData);
            return filteredData;
        },

        filterDataByType(emissiontype, data = null) {
            const filteredData = data || {
                datasets: this.lineData.datasets,
                labels: this.lineData.labels,
            };

            if (emissiontype !== 'All') {
                filteredData.datasets = filteredData.datasets.filter(dataset => dataset.emissiontype === emissiontype);
            }

            console.log('Filtered data by type:', filteredData);
            return filteredData;
        },

    }

}

</script>

<style>

html {
    scroll-behavior: smooth;
    max-height: 100vh;
}

main {
    margin-top: 3.15em;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100vw;
}

#underline-green {
	width: 0;
	height: 0;

    background-color: rgba(255, 252, 242, 1);
	
	border-right: 3px solid transparent; 
	border-left: 3px solid transparent; 

    border-top: 5.31px solid rgb(86, 130, 89);
    position: absolute;
    padding-right: 97%;
    float: right;
}

#underline-white {
	width: 0;
	height: 0;
	
	border-right: 3px solid transparent; 
	border-left: 3px solid transparent; 

    border-top: 3.31px solid rgba(255, 255, 255, 1);

    position: absolute;
    padding-right: 98%;
    float: right;
}

.fullback {
    position: fixed;
    display: grid;
    grid-template-columns: 6fr 3fr 1fr 5fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2.5px;
    width: 100vw;
    height: 94vh;
    background-color: #343837;
}

.fullback-entry {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2.5px;
    width: 100vw;
    height: 94vh;
    background-color: rgba(0, 0, 0);
}

.summary-card {
    display: block;
    grid-column: 12 / 15;
    grid-row: 1 / 3;
    position: relative;
    width: 100%;
    min-width: 100%;
    height: 98.9%;
    background-color: rgb(238, 238, 238);
}

.summary-list {
    height: 50%;
    position: relative;
    overflow: scroll;
    background-color: rgb(0, 0, 0);
    width: 100%;
    border: 5px solid rgb(255, 252, 242);
    border-radius: 8px;
    overflow: scroll; 
}

.summary-single {
    position: relative;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    width: 100%;
    border: 1px solid rgb(255, 255, 255);
}

.summary-label-container {
    padding-bottom: 2%;
}

.summary-label {
    position: relative;
    top: 4%;
    left: 2%;
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 28px;
    left: 6%;
    background-color: rgb(255, 252, 242);
    z-index: 3;
}

.summary-sublabel {
    position: relative;
    top: 2%;
    font-family: 'DM Sans';
    color: rgb(255, 255, 255);
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 15px;
    padding-left: 5px;
    border-bottom: 1px solid rgb(255, 255, 255);
}

.summary-text {
    font-family: 'DM Sans';
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-size: 15px;
    padding: 5%;
    padding-top: 50%;
    position: relative;
    width: 100%;
}

.treemap-card {
    grid-column: 1 / 8;
    grid-row: 2 / 3;
    position: relative;
    height: 100%;
    background-color: #343837;
    font-family: 'DM Sans';
}

.treemap-container {
    position: relative;
    height: 100%;
}

.treemap-label {
    display: block;
    position: relative;
    width: fit-content;
    left: 0.5%;
    top: 2%;
    font-family: 'DM Sans';
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 20px;
}

.graph-options {
    display: block;
    grid-column: 8 / 11;
    grid-row: 2;
    position: relative;
    font-family: 'DM Sans';
    height: 98%;
    background-color: rgb(238, 238, 238);
    font-family: 'DM Sans';
    border-radius: 6px;
}

.graph-options-label {
    display: flex;
    position: relative;
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 22px;
    padding: 3%;
    left: 3%;
}

.linechart-card {
    position: relative;
    grid-column: 1 / 12;
    grid-row: 1;
    width: 100%;
    height: 90%;
    background-color: #343837;
    border-radius: 6px;
}

.linechart-container {
    position: relative;
    height: 100%;
    min-height: 100%;
    width: 100%;
    padding-top: 1.5%;
    padding-right: 1%;
}

.line-label {
    position: relative;
    left: 0.5%;
    top: 5%;
    font-family: 'DM Sans';
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 20px;
}

.target-card {
    display: flexbox;
    grid-column: 6 / 12;
    grid-row: 1 / 2;
    height: 100%;
    background-color: rgb(255, 255, 255);
}

.targets-list {
    height: 90%;
    position: relative;
    padding: 5%;
}

.target-single {
    position: relative;
    padding: 2.5%;
}

.targets-label {
    position: relative;
    width: fit-content;
    padding-top: 15px;
    left: 6%;
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 28px;
    text-align: top;
}

.target-text {
    position: relative;
    font-family: 'Raleway';
    color: rgb(0, 0, 0);
    font-weight: 200;
    font-size: 17px;
}

/* Large desktops and laptops */ 
@media (min-width: 1200px) { 
} 
 
/* Landscape tablets and medium desktops */ 
@media (min-width: 992px) and (max-width: 1199px) { 
 

} 
 
/* Portrait tablets and small desktops */ 
@media (min-width: 768px) and (max-width: 991px) { 
 

} 
 
/* Landscape phones and portrait tablets */ 
@media (max-width: 767px) { 
 

} 
 
/* Portrait phones and smaller */ 
@media (max-width: 480px) { 
 
    .fullback {
        position: fixed;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 2.5px;
        width: 100vw;
        height: 192vh;
        background-color: rgba(0, 0, 0);
        z-index: 2;
    }

    .linechart-card {
        grid-column: 1;
        grid-row: 1 / 3;
        width: 1fr;
        height: 1fr;
    }

    .line-label {
        position: relative;
        top: 2%;
        left: 3.5%;
        font-family: 'DM Sans';
        color: rgb(255, 255, 255);
        font-weight: 500;
        font-size: 28px;
    }

    .treemap-card {
        grid-column: 1;
        grid-row: 3 / 5;
        width: 1fr;
        height: 1fr;
    }
    
    .treemap-container {
        height: fit-content;
        width: 100%;
    }

    .treemap-label {
        display: block;
        position: relative;
        width: fit-content;
        top: 2%;
        left: 4%;
        font-family: 'DM Sans';
        color: rgb(255, 255, 255);
        font-weight: 500;
        font-size: 28px;
    }

    .graph-options {
        grid-column: 1; 
        grid-row: 5;
        width: 1fr;
        height: 1fr;
    }

    .summary-card {
        grid-column: 1;
        grid-row: 5;
        width: 1fr;
        height: 1fr;
    }

} 

</style>