<template>
<div v-if="displayEntry" class="fullback-entry">
    <div class="entry-card">
        <div id="entry-container">
            <div class="entry-title">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                    <path d="M13 8l2 0" />
                    <path d="M13 12l2 0" />
                </svg>
                Your Emissions</div>
            <div id="underline-container">
                 <div id="underline-green-entry"></div>
            </div>
            <div id="entry-details">
                <div class="entry-labels">
                    <span id="period-label">Period</span>
                    <span id="scope-label">Scope</span>
                    <span id="type-label">Asset Type</span>
                    <span id="unit-label">Unit</span>
                    <span id="amt-label">Amt.</span>
                    <span id="netgross-label">N/G</span>
                    <span class="grid-breaker"></span>
                    <span id="emissions-label">Emissions</span>
                    <span class="grid-breaker"></span>
                    <span id="name-label">Name</span>
                </div>
                <div class="entry-single">
                    <span class="scope-dropdown-placeholder">
                        <select id="scope-dropdown" class="dropdown-select">
                            <option v-for="scope in scopes" :key="scope" :value="scope">{{ scope }}</option>
                        </select>
                    </span>
                    <span class="type-input-placeholder">
                        <v-select :options="types" label="name" />
                    </span>
                    <span class="unit-dropdown-placeholder">
                        <select id="unit-dropdown" class="dropdown-select">
                            <option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
                        </select>
                    </span>
                    <span class="amt-input-placeholder">
                        <input class="dropdown-input">
                    </span>
                    <span class="netgross-dropdown-placeholder">
                        <select id="netgross-dropdown" class="dropdown-select">
                            <option v-for="netgross in netgrosslist" :key="netgross" :value="netgross">{{ netgross }}</option>
                        </select>
                    </span>
                    <span class="emissions-input-placeholder">
                        <div class="emissions-text">123 kgCO2e</div>
                    </span>
                    <span class="name-input-placeholder">
                        <input class="dropdown-input">
                    </span>
                    <span class="calendar-picker-placeholder">
                        <Datepicker v-model="date" />
                    </span>
                </div>
                <div class="entry-single">
                    <span class="scope-dropdown-placeholder">
                        <select id="scope-dropdown" v-model="selectedScope" class="dropdown-select">
                            <option v-for="scope in scopes" :key="scope" :value="scope">{{ scope }}</option>
                        </select>
                    </span>
                    <span class="type-input-placeholder">
                        <v-select :options="types" label="name" />
                    </span>
                    <span class="unit-dropdown-placeholder">
                        <select id="unit-dropdown" v-model="selectedUnit" class="dropdown-select">
                            <option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
                        </select>
                    </span>
                    <span class="amt-input-placeholder">
                        <input class="dropdown-input">
                    </span>
                    <span class="netgross-dropdown-placeholder">
                        <select id="netgross-dropdown" v-model="selectedNetGross" class="dropdown-select">
                            <option v-for="netgross in netgrosslist" :key="netgross" :value="netgross">{{ netgross }}</option>
                        </select>
                    </span>
                    <span class="emissions-input-placeholder">
                        <div class="emissions-text">42 kgCO2e</div>
                    </span>
                    <span class="name-input-placeholder">
                        <input class="dropdown-input">
                    </span>
                    <span class="calendar-picker-placeholder">
                        <Datepicker v-model="date" />
                    </span>
                </div>
                <div class="entry-single">
                    <span class="scope-dropdown-placeholder">
                        <select id="scope-dropdown" class="dropdown-select">
                            <option v-for="scope in scopes" :key="scope" :value="scope">{{ scope }}</option>
                        </select>
                    </span>
                    <span class="type-input-placeholder">
                        <v-select :options="types" label="name" class="type-input-box"/>
                    </span>
                    <span class="unit-dropdown-placeholder">
                        <select id="unit-dropdown" class="dropdown-select">
                            <option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
                        </select>
                    </span>
                    <span class="amt-input-placeholder">
                        <input class="dropdown-input">
                    </span>
                    <span class="netgross-dropdown-placeholder">
                        <select id="netgross-dropdown" class="dropdown-select">
                            <option v-for="netgross in netgrosslist" :key="netgross" :value="netgross">{{ netgross }}</option>
                        </select>
                    </span>
                    <span class="emissions-input-placeholder">
                        <div class="emissions-text">76 kgCO2e</div>
                    </span>
                    <span class="name-input-placeholder">
                        <input class="dropdown-input">
                    </span>
                    <span>
                        <Datepicker v-model="date" />
                    </span>
                </div>
                <div class="entry-single">
                    <button id="add-button">+</button>
                </div>
            </div>
        </div>
    </div>

    <div class="target-entry-card">
        <div id="targets-container">
            <div id="title-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-target-arrow" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 7a5 5 0 1 0 5 5" />
                    <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
                    <path d="M15 6v3h3l3 -3h-3v-3z" />
                    <path d="M15 9l-3 3" />
                </svg>
                <div class="target-entry-title">Your Targets
                </div>
            </div>
        
            <div class="target-entry-labels">
                <span id="triangle-marker"></span>
                <span id="target-label">Target 1</span>
                <span id="options-label">Options</span>
            </div>
            <div class="target-entry-single">
                <span id="asset-name">Asset 1</span>
                <span id="target-amt">12 kgCO2e</span>
                <span id="target-period">p/m</span>
            </div>
            <div class="target-entry-labels">
                <span id="triangle-marker"></span>
                <span id="target-label">Target 2</span>
                <span id="options-label">Options</span>
            </div>
            <div class="target-entry-single">
                <span id="asset-name">Asset 2</span>
                <span id="target-amt">22 kgCO2e</span>
                <span id="target-period">p/q</span>
            </div>
            <div class="target-entry-labels">
                <span id="triangle-marker"></span>
                <span id="target-label">Target 3</span>
                <span id="options-label">Options</span>
            </div>
            <div class="target-entry-single">
                <span id="asset-name">Asset 2</span>
                <span id="target-amt">51 kgCO2e</span>
                <span id="target-period">p/a</span>
            </div>
            <div class="target-entry-single">
                <button id="add-button-targets">+</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';

const date = ref();

export default {

    name: 'TabularEntry',

    components: {
        vSelect: window["vue-select"],
        Datepicker
    },

    props: {
        displayEntry: Boolean,
    },

    data() {
        return {
            selectedScope: 1,
            scopes: [1, 2, 3],

            selectedUnit: 'kgCO2e',
            units: ['kgCO2e', 'kWh'],

            selectedNetGross: 'Net',
            netgrosslist: ['Net', 'Gross'],

            selectedType: 'Asset Type 1',
            types: [
                { name: 'Asset Type 1' },
                { name: 'Asset Type 2' },
                { name: 'Asset Type 3' },
                { name: 'Long testing name, lorup ipsum Caecilius erat in foro' },
            ],

        }
    },

    methods: {
        
		hideEntry() {
	  		this.$emit('close-entry');
		},
	}

}

</script>

<style>

@import 'vue-select/dist/vue-select.css';

.vs__selected-options {
    max-width: 100%;
    max-height: 34px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.vs__dropdown-toggle {
    max-width: 100vw;
    max-height: 34px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

#underline-container {
    position: relative;
    display: block;
    width: 233px;
    left: 1%;
    padding-bottom: 1%;
}

#underline-white-container {
    position: relative;
    display: block;
    width: 205px;
    left: 1%;
    padding-bottom: 2%;
}

#underline-green-entry {
    display: block;
	width: 100%;
	height: 0;

    background-color: rgba(255, 252, 242, 1);
	
	border-right: 3px solid transparent; 
	border-left: 3px solid transparent; 

    border-top: 5.31px solid rgb(86, 130, 89);
    position: relative;
}

#underline-white-entry {
    display: block;
	width: 100%;
	height: 0;

	
	border-right: 3px solid transparent; 
	border-left: 3px solid transparent; 

    border-top: 5.31px solid rgb(255, 255, 255);
    position: relative;
}

.entry-card {
    position: relative;
    left: 0.1%;
    top: 0.25%;
    height: 99%;
    width: 100%;
    display: inline;
    grid-column: 1 / 12;
    grid-row: 1 / 3;
    background-color: rgb(238, 238, 238);
    border-radius: 6px;
    border-right: 1px solid rgb(255, 255, 255);

}

#entry-container {
    position: relative;
    left: 5%;
    width: 100%;
    height: 90%;
}

#entry-details {
    display: grid;
}

.entry-title {
    position: relative;
    width: 100%;
    font-family: 'DM Sans';
    font-size: 28px;
    font-weight: 500;
    color: rgb(0, 0, 0);
}

.entry-labels {
    display: grid;
    grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr 
                           1fr 
                           3fr 
                           1fr 
                           3fr 
                           1fr
                           1fr;
    grid-template-rows: 1fr;
    column-gap: 2px;
    font-family: 'DM Sans';
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-align: center;
    padding-bottom: 1.5%;
}

#period-label {
    grid-column: 1;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    text-align: center;
}

#scope-label {
    grid-column: 2;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
    text-align: center;
}

#type-label {
    grid-column: 8;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
}

#unit-label {
    grid-column: 4;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
}

#amt-label {
    grid-column: 5 ;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
}

#netgross-label {
    grid-column: 6;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

#emissions-label {
    grid-column: 10;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
}

#name-label {
    grid-column: 3;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
}

.grid-breaker {
    grid-area: 7, 9;
    grid-row: 1;
    width: 100%;
}

.entry-single {
    display: grid;
    grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr 
                           1fr 
                           3fr 
                           1fr 
                           3fr 
                           1fr
                           1fr;
    grid-template-rows: 38px;
    column-gap: 2px;
    grid-column-end: span;
    font-family: 'DM Sans';
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-align: center;
    padding-top: 1%;
}

.calendar-picker-placeholder {
    grid-column: 1;
    grid-row: 1;
}

.scope-dropdown-placeholder {
    grid-column: 2;
    grid-row: 1;
}

.type-input-placeholder {
    position: relative;
    top: 2.5%;
    grid-column: 8;
    grid-row: 1;
    font-family: 'Raleway';
	font-size: 14px;
    color: rgb(0,0,0);
    background-color: rgb(255, 255, 255);
    height: 95%;
    max-height: 95%;
    border: 1px solid rgb(238, 238, 238);
    min-width: 100%;
}

.unit-dropdown-placeholder {
    grid-column: 4;
    grid-row: 1;
    height: 100%;
    width: 100%;
    font-family: 'Raleway';
	font-size: 13px;
}

.amt-input-placeholder {
    grid-column: 5;
    grid-row: 1;
    height: 100%;
    width: 100%;
    font-family: 'Raleway';
	font-size: 13px;
}

.netgross-dropdown-placeholder {
    grid-column: 6;
    grid-row: 1;
    height: 100%;
    width: 100%;
}

.emissions-input-placeholder {
    grid-column: 10;
    grid-row: 1;
    height: 100%;
    width: 100%;
    font-family: 'Raleway';
	font-size: 15px;
    text-align: center;
}

.name-input-placeholder {
    grid-column: 3;
    grid-row: 1;
    height: 100%;
    width: 100%;
    font-family: 'Raleway';
	font-size: 13px;
}

.dropdown-select {
    font-family: 'Raleway';
	font-size: 13px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: center;
}

.dropdown-input {
    font-family: 'Raleway';
	font-size: 13px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: 100%;
    height: 100%;
    text-align: center;
}

.emissions-text {
    font-family: 'Raleway';
	font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: 100%;
    height: 92.25%;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    padding-top: 3%;
    position: relative;
    top: 5.75%;
}

.new-entry-text {
    position: relative;
    font-family: 'Raleway';
	font-size: 28px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    outline: none;
    width: 100%;
    height: 80%;
    background-color: rgba(255, 255, 255, 1);
    color: rgb(0, 0, 0);
    cursor: pointer;
}

.target-entry-card {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 12 / 16;
    grid-row: 1 / 3;
    background-color: rgb(46, 64, 82);
    border-left: 1px solid rgb(255, 255, 255);
    border-radius: 4px;
}

#targets-container {
    position: relative;
    left: 5%;
    width: inherit;
    overflow: scroll;
    margin: auto auto;
}

#title-container {
    width: 100%;
    height: 50%;
    display: flex;
    padding-bottom: 5%;
}

.target-entry-title {
    padding: 5px;
    font-family: 'DM Sans';
    font-size: 28px;
    font-weight: 500;
    color: rgb(255, 255, 255);
}

.target-entry-labels {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 4fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    font-family: 'DM Sans';
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-align: center;
    padding-bottom: 1.5%;
    width: 95%;
}

#triangle-marker {
    position: relative;
    margin: auto;
    width: 100%;
    height: 0px;
    border-style: solid;
    border-width: 5px 0 5px 9.9px;
    border-color: transparent transparent transparent #FFFFFF;
    transform: rotate(0deg);

    grid-column: 1;
    grid-row: 1;
}

.target-entry-single {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 4fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    font-family: 'Raleway';
    font-size: 16px;
    color: rgb(255, 255, 255);
    text-align: center;
    width: 95%;
}

#target-label {
    grid-column: 2;
    grid-row: 1;
    background-color: rgba(49, 126, 34, .8);
    border-radius: 4px;
    border-right: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
}

#options-label {
    grid-column: 5 / 8;
    grid-row: 1;
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
    cursor: pointer;
}

#asset-name {
    grid-column: 2;
    grid-row: 1;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 4px;
    border: 1px solid #ccc;
}

#target-amt {
    grid-column: 4;
    grid-row: 1;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 4px;
    border: 1px solid #ccc;
}

#target-period {
    grid-column: 6 / 8;
    grid-row: 1;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 4px;
    border: 1px solid #ccc;
}

#add-button {
    grid-column: 10;
    grid-row: 1;
    width: 75%;
    position: relative;
    left: 12.5%;
	appearance: button;
	background-color: rgba(49, 126, 34, .65);
	background-image: none;
	border: 1px rgb(0, 0, 0);
	border-radius: 4px;
	box-shadow: transparent 2px 2px 0 0,#d9d9d9 2px 2px 0 1px;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: 'DM Sans';
	font-size: 17px;
	font-weight: 400;
	line-height: 20px;
	margin: 0 5px 10px 0;
	overflow: visible;
	text-align: center;
	text-transform: none;
	touch-action: manipulation;
	user-select: none;
	-webkit-user-select: none;
	vertical-align: middle;
	white-space: nowrap;
}

#add-button:focus {
	text-decoration: none;
}

#add-button:hover {
	text-decoration: none;
}

#add-button:active {
	box-shadow: rgba(0, 0, 0, .125) 0 2x 2px inset;
	outline: 0;
}

#add-button:not([disabled]):active {
	box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
	transform: translate(2px, 2px);
}

#add-button-targets {
    grid-column: 1;
    grid-row: 1;
    width: 75%;
    position: relative;
    left: 12.5%;
	appearance: button;
	background-color: rgba(49, 126, 34, .65);
	background-image: none;
	border: 1px rgb(0, 0, 0);
	border-radius: 4px;
	box-shadow: transparent 2px 2px 0 0,#d9d9d9 2px 2px 0 1px;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: 'DM Sans';
	font-size: 17px;
	font-weight: 400;
	line-height: 20px;
	margin: 0 5px 10px 0;
	overflow: visible;
	text-align: center;
	text-transform: none;
	touch-action: manipulation;
	user-select: none;
	-webkit-user-select: none;
	vertical-align: middle;
	white-space: nowrap;
}

#add-button-targets:focus {
	text-decoration: none;
}

#add-button-targets:hover {
	text-decoration: none;
}

#add-button-targets:active {
	box-shadow: rgba(0, 0, 0, .125) 0 2x 2px inset;
	outline: 0;
}

#add-button-targets:not([disabled]):active {
	box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
	transform: translate(2px, 2px);
}



</style>