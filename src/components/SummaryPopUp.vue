<template>
	<div v-if="isVisible" class="summary-overlay">
		<button @click="hideSummaryPopup" class="close-summary">x</button>
        <span class="summary-label-pop">Emissions Summary
            <div id="underline-green-pop"></div>
        </span>
        <div class="summary-list-pop">
            <span class="summary-sublabel-pop">Kilogrammes CO2 Emitted</span>
            <div class="summary-single-pop" v-for="summary in datasetSummaries" :key="summary.label">
                <span class="summary-text-pop">{{ summary.label }}: {{ summary.sum }} kgCO2e ({{ summary.year }})</span>
            </div>
        </div>
	</div>
</template>

<script>

export default {

	props: {
		isVisible: {
			type: Boolean,
			default: false,
		},
        
  	},

	methods: {
		hideSummaryPopup() {
	  		this.$emit('close');
		},
	}
};

</script>

<style>

#underline-green-pop {
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

.summary-overlay {
    display: block;
    position: relative;
    width: 100%;
    min-width: 100%;
    height: 100vh;
    background-color: rgb(255, 252, 242);
    z-index: 10;
    opacity: 50%;
}

.summary-list-pop {
    height: 50%;
    position: relative;
    overflow: scroll;
}

.summary-single-pop {
    position: relative;
    padding-top: 5%;
    padding-left: 5%;
    justify-content: space-between;
}

.summary-label-pop {
    position: relative;
    top: 2%;
    left: 2%;
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 600;
    font-size: 34px;
    left: 6%;
    background-color: rgb(255, 252, 242);
}

.summary-sublabel-pop {
    position: relative;
    top: 10%;
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 600;
    font-size: 18px;
    padding: 10%;

}

.summary-text-pop {
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 400;
    font-size: 15px;
}

.close-summary {
	background: none;
	color: rgba(0, 0, 0, 0.5);
	border: none;
	padding-top: 0%;
	padding-right: 0.5%;
	cursor: pointer;
	font-family: 'Arial';
	font-size: 40px;
	display: inline;
	position: absolute;
	right: 1%;
	top: 0%;
}

@keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  	0% { opacity: 0; }
  	100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}

@-o-keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}

</style>