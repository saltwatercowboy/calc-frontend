<template>
	<div v-if="isVisible" class="popup-overlay">
		<button @click="hideRegisterPopup" class="close-register">x</button>
		<div class="popup-content">
			<p id="register-title">Sign Up</p>
			<div id="register-title-line"></div>
			<div id="entry-container">
				<form class="register-form" action="#" method="post">
					<div id="user-pass-block">
						<label id="register-text" for="username">Email</label>
						<input id="register-box" type="email" name="username" required>
					</div>
					<div id="user-pass-block">
						<label id="register-text" for="password">Password</label>
						<input id="register-box" type="password" name="password" required>
					</div>
                    <div id="user-pass-block">
						<label id="register-text" for="password">Re-enter your password</label>
						<input id="register-box" type="password" name="password" required>
					</div>
					<div class="input-group">
						<button id="reg-button" type="submit">Sign up</button>
					</div>
				</form>
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
		hideRegisterPopup() {
	  		this.$emit('close');
		},
	},
};

</script>

<style>

.popup-overlay {
	position: fixed;
	top: 9%;
	width: 100%;
	height: 100vh;
	min-width: 0%;
	background: rgba(246, 248, 232, 0.97); 
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
	border: 2px solid rgba(255, 255, 255, 0.97);
	box-shadow: 6px 6px 6px 6px rgba(0,0,0,.5);
	animation: fadeIn 5s;
	-webkit-animation: fadeIn 0.5s;
	-moz-animation: fadeIn 0.5s;
	-o-animation: fadeIn 0.5s;
	-ms-animation: fadeIn 0.5s;	
}

.popup-content {
	display: block;
	position: fixed;
	background-color: rgba(232, 239, 235, 0.8);
	box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.1);
	width: 45em;
	min-width: 30em;
	height: 100%;
	z-index: 6;
	animation: fadeIn 5s;
	-webkit-animation: fadeIn 0.5s;
	-moz-animation: fadeIn 0.5s;
	-o-animation: fadeIn 0.5s;
	-ms-animation: fadeIn 0.5s;	
}

#register-title {
	display: block;
	position: relative;
	font-family: 'Raleway';
    font-size: 46px;
	font-weight: 600;
    width: 100%;
	height: 20%;
	top: 10%;
    z-index: 5;
	color: rgb(0, 0, 0, 0.98);
	text-align: center;
    }

#register-title-line {
	display: block;
	position: relative;
	margin: 0 auto;
	width: 25%;
	height: 2px;
	background-color: rgba(0, 0, 0, 0.2);
	top: 2.5%;
}

#entry-container {
    display: block;
	position: relative;
	padding-top: 5%;
	width: 50%;
	left: 25%;
	}

#user-pass-block {
	padding: 5%;
	justify-content: space-between;
	position: relative;
	width: 100%;
	top: 100%;
}

#register-text {
	position: relative;
	left: 1%;
	padding-bottom: 5%;
	display: block;
	font-family: 'Raleway';
    font-size: 16px;
	font-weight: 600;
    width: 100%;
	color: rgb(0, 0, 0, 0.98);
}

#register-box {
	display: block;
	font-family: 'Raleway';
    font-size: 24px;
	height: 2em;
    width: 100%;
	color: rgb(0, 0, 0, 0.98);
	box-shadow: 0px 1px 0px 1px rgba(0,0,0,0.1);
	border: solid 1px rgb(0,0,0,0.1);
	border-radius: 6px;
	position: relative;
	text-align: center;
	margin: auto;
	z-index: 7;
	border: none;
}

#reg-button {
	position: relative;
    left: 30%;
	font-family: 'Raleway';
	font-size: 24px;
    margin: 0 auto;
	border: solid 1px rgb(0,0,0,0.1);
	border-radius: 6px;
	background-color: rgb(22, 100, 7);
	color: rgb(255, 255, 255);
	padding: 2.5%;
	cursor: pointer;
}

.close-register {
	background: none;
	color: rgba(0, 0, 0, 0.5);
	border: none;
	padding-top: 0%;
	padding-right: 0.5%;
	cursor: pointer;
	font-family: 'Arial';
	font-size: 32px;
	display: inline;
	position: absolute;
	right: 0%;
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

@media screen and (max-width: 786px) {
	.popup-overlay {
		width: 100vw;
	}

	.close-register {
		top: 5%;
		right: 5%;
		z-index: 7;
	}
}

</style>