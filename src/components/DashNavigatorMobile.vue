<template>
<nav class="navigation-dash-mobile">
		<div class="logo-items-dash-mobile">
			<img class="logo-dash-mobile" src="/src/assets/logo_75px.png" alt="logo" />
			<h1 class="headname-dash-mobile">Client Name</h1>
		</div>
            <button @click="showSummaryPopup" id="mobile-box-center-dash-mobile">
                <span class="mobile-bar-top-bottom-dash-mobile"></span>
                <span class="mobile-bar-middle-dash-mobile"></span>
                <span class="mobile-bar-top-bottom-dash-mobile"></span>
            </button>
	</nav>
	<SummaryPopUp :is-visible="isSummaryPopupVisible" @close="hideSummaryPopup" :computedProp="computedData"/>
</template>

<script>

import SummaryPopUp from './SummaryPopUp.vue';

export default {

	components: {
		SummaryPopUp
	},
 
	props: {
		computedData: {
			type: Array,
			required: true
		}
	},

	data() {
		return {
			isSummaryPopupVisible: false,
		}
	},

	methods: {

		showSummaryPopup() {
			this.isSummaryPopupVisible = true;
		},

		hideSummaryPopup() {
			this.isSummaryPopupVisible = false;
		},

	}
}

</script>

<style>

.navigation-dash-mobile {
	display: flex;
	position: fixed;
	min-height: 40px;
	top: 0;
	left: 0;
	width: 100vw;
	background-color: rgb(0, 136, 88);
	z-index: 7;
	white-space: nowrap;
    border: 1px solid rgb(0, 0, 0);
}

.logo-dash-mobile {
	float: left;
	height: 100%;
}

.headname-dash-mobile {
	margin: auto;
	font-size: 25px;
	font-family: 'DM Sans';
	color: rgb(255, 255, 255)
}

.logo-items-dash-mobile {
	height: 50px;
	display: flex;
	min-width: 20%;
}

.nav-links-dash-mobile {
	height: 100%;
	width: 60%;
	align-items: center;
	text-align: center;
}

#mobile-box-center-dash-mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    left: 32.5%;
    height: 100%;
    width: 30%;
    position: relative;
	padding-left: 15%;
	background-color: rgba(0, 0, 0, 0);
	border: none;
	cursor: pointer;
    align-items: center;

}

.mobile-bar-top-bottom-dash-mobile {
	width: 40%;
    margin: 11px;
    
	border-right: 0px solid transparent; 
	border-left: 0px solid transparent; 

    border-top: 3px solid rgba(132, 132, 132, 0.9);
    border: 1px solid rgb(255, 255, 255);
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2);

    position: relative;

	align-items: center;

}

.mobile-bar-middle-dash-mobile {
	width: 60%;
    margin: auto;
    
	border-right: 0px solid transparent; 
	border-left: 0px solid transparent; 

    border-top: 3px solid rgba(132, 132, 132, 0.9);
    border: 1px solid rgb(255, 255, 255);
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2);

    position: relative;

	align-items: center;

}

@media (max-width: 768px) {
	.headname-dash-mobile {
		font-size: 1em;
		
  }
}

</style>