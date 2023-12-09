<template>
    <meta name="viewport" content="width=device-width, initial_scale=1.0">
    <nav class="navigation">
        <div class="logo-items">
            <img class="logo" src="/src/assets/logo_75px.png" alt="logo" />
            <h1 class="headname">LOGO TEXT</h1>
        </div>
        <div class="nav-links">
            <a ref="navhome" class="navitems" href="#top">Home</a>
            <a ref="navproducts" class="navitems" href="#products-hook">Products</a>
            <a ref="navabout" class="navitems" href="#about-hook">About</a>
            <a class="navitems" href="Login">Log in</a>
        </div>
    </nav>
</template>

<script>

</script>

<style>

.navigation{
    display: flex;
    position: fixed;
    min-height: auto;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: rgb(22, 100, 7);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    z-index: 5;
    white-space: nowrap;
}

.logo {
    float: left;
    height: 100%;
}

.headname {
    margin: auto;
    font-size: 25px;
    font-family: 'DM Sans';
    color: rgb(255, 255, 255)
}

.logo-items {
    height: 60px;
    display: flex;
    min-width: 20%;
    background-color: black;
}

.nav-links {
    height: 60px;
    display: flex;
    width: 60%;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
}

.navitems {
    text-decoration: none;
    min-height: auto;
    text-align: center;
    font-size: 17px;
    font-family: 'DM Sans';
    color: rgb(255, 255, 255);
}

.navitems.bold {
    font-weight: bold;
}

</style>