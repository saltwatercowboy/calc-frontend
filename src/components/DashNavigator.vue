<template>
<meta name="viewport" content="width=device-width" initial_scale="1.0">
<nav class="navigation-dash">
    <div class="logo-items-dash">
        <img class="logo-dash" src="/src/assets/logo_75px.png" alt="logo" />
        <h1 class="headname-dash">Client Name</h1>
    </div>
    <div class="nav-links-dash">
        <span>
            <a ref="navproducts" class="navitems-dash" href="#dashboard">Dashboard</a>
        </span>
        <span>        
            <a ref="navabout-dash" class="navitems-dash" href="#entry">Add Emissions</a>
        </span>
        <span>
            <a ref="navabout-dash" class="navitems-dash" href="#generator">Generate Report</a>
        </span>
        <span>
            <a ref="navabout-dash" class="navitems-dash" href="#ucp">Account</a>
        </span>
        <span>
            <button class="navitems-dash" id="login-nav">Sign out</button>
        </span>
    </div>
</nav>
</template>

<script>

</script>

<style>

.navigation-dash {
	display: flex;
	position: fixed;
	height: 50px;
	top: 0;
	left: 0;
	width: 100vw;
	background-color: rgb(22, 100, 7);
	z-index: 7;
	white-space: nowrap;
    border: 1px solid rgb(255, 252, 242);
}

.logo-dash {
	float: left;
	height: 100%;
}

.headname-dash {
	margin: auto;
	font-size: 25px;
	font-family: 'DM Sans';
	color: rgb(255, 255, 255)
}

.logo-items-dash {
	height: auto;
	display: flex;
	min-width: 20%;
    background-color: rgba(0, 0, 0, 0);
}

div.nav-links-dash {
    display: table;
    table-layout: fixed;
    position: relative;
	height: auto;
	width: 100%;
    min-width: 70%;
    top: 20%;
    left: 10%;
    }

.nav-links-dash span {
    max-width: 20%;
    min-width: 20%;
    display: table-cell;
    text-overflow: ellipsis;
    overflow: hidden;
    color: rgb(255, 255, 255);
    
}

div.nav-links-dash span:last-child {
    text-align: right;
    padding-right: 100%;
}

.navitems-dash {
    text-decoration: none;
	min-height: auto;
	text-align: center;
	font-size: 1.1em;
	font-family: 'DM Sans';
	color: rgb(255, 255, 255);
}

#login-nav-dash {
	background-color: rgba(0, 0, 0, 0);
	font-size: 22px;
	color: rgb(255, 255, 255);
	border: none;
	cursor: pointer;
}

.navitems-dash.bold {
	font-weight: bold;
}

</style>