<template>
<nav class="navigation-mobile">
		<div class="logo-items-mobile">
			<img class="logo-mobile" src="/src/assets/logo_75px.png" alt="logo" />
			<h1 class="headname-mobile">LOGO TEXT</h1>
		</div>
		<div class="nav-links-mobile">
            <button @click="showRegisterPopup" class="button-50-mobile" role="button">Try it Free</button>
            <div id="mobile-box-mobile">
                <button @click="showLoginPopup" id="mobile-box-center-mobile">
                    <div class="mobile-bar-top-bottom-mobile"></div>
                    <div class="mobile-bar-middle-mobile"></div>
                    <div class="mobile-bar-top-bottom-mobile"></div>
				</button>
		    </div>
		</div>
	</nav>
	<LoginPopup :is-visible="isLoginPopupVisible" @close="hideLoginPopup" />
	<RegistrationPopUp :is-visible="isRegisterPopupVisible" @close="hideRegisterPopup" />
</template>

<script>

import LoginPopup from './LoginPopup.vue';
import RegistrationPopUp from './RegistrationPopUp.vue';

export default {

	components: {
		LoginPopup,
		RegistrationPopUp,
	},

	data() {

		return {
			isLoginPopupVisible: false,
			isRegisterPopupVisible: false,
		};

	},
	
	methods: {

		showLoginPopup() {
			this.isLoginPopupVisible = true;
		},

		hideLoginPopup() {
      		this.isLoginPopupVisible = false;
    	},
		
		showRegisterPopup() {
			this.isRegisterPopupVisible = true;
		},

		hideRegisterPopup() {
      		this.isRegisterPopupVisible = false;
    	},
	}
};

</script>

<style>

.navigation-mobile {
	display: flex;
	position: fixed;
	min-height: 68px;
	top: 0;
	left: 0;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	background-color: rgb(22, 100, 7);
	box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
	z-index: 7;
	white-space: nowrap;
}

.logo-mobile {
	float: left;
	height: 100%;
}

.headname-mobile {
	margin: auto;
	font-size: 25px;
	font-family: 'DM Sans';
	color: rgb(255, 255, 255)
}

.logo-items-mobile {
	height: 50px;
	display: flex;
	min-width: 20%;
	background-color: black;
}

.nav-links-mobile {
	height: 40px;
	display: flex;
	width: 60%;
	align-items: center;
	text-align: center;
}

.button-50-mobile {
	appearance: button;
	background-color: rgba(49, 126, 34, 1);
	background-image: none;
	border: 1px rgba(201, 211, 120, 1);
	border-radius: 4px;
	box-shadow: rgb(22, 100, 7) 4px 4px 0 0,#fff 4px 4px 0 1px;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: 'DM Sans';
	font-size: 17px;
	font-weight: 400;
	line-height: 10px;
	margin: 2px 5px 10px 40px;
	overflow: visible;
	padding: 12px 40px;
	text-align: center;
	text-transform: none;
	touch-action: manipulation;
	user-select: none;
	-webkit-user-select: none;
	vertical-align: middle;
	white-space: nowrap;
}

.button-50-mobile:focus {
	text-decoration: none;
}

.button-50-mobile:hover {
	text-decoration: none;
}

.button-50-mobile:active {
	box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
	outline: 0;
}

.button-50-mobile:not([disabled]):active {
	box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
	transform: translate(2px, 2px);
}

#mobile-box-mobile {
	position: relative;
    height: 100%;
    width: 30%;
    float: inline-end;
	background-color: rgba(0, 0, 0, 0);
	color: rgba(0, 0, 0, 0);
	border: none;
	cursor: pointer;
	left: 10%;
}

#mobile-box-center-mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
    width: 100%;
    position: relative;
    top: 15%;
	padding-left: 15%;
	background-color: rgba(0, 0, 0, 0);
	border: none;
	cursor: pointer;

}

.mobile-bar-top-bottom-mobile {
	width: 40%;
    margin: auto;
    
	border-right: 0px solid transparent; 
	border-left: 0px solid transparent; 

    border-top: 3px solid rgba(132, 132, 132, 0.9);
    border: 1px solid rgb(255, 255, 255);
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2);

    position: relative;

	align-items: center;

}

.mobile-bar-middle-mobile {
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
	.button-50-mobile {
		padding: 12px 2px;
		
  }
}

@media (max-width: 768px) {
	.headname-mobile {
		font-size: 1em;
		
  }
}

</style>