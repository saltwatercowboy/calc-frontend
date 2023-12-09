<template>
    <meta>
    <footer class="footer-bar">
        <div class="contact-items">
            <p>Contact Email</p>
            <p>Contact Phone</p>
            <p>Registered Address</p>
        </div>
        <div class="attrib-details">
            <p>A WhatsThePayBack Company</p>
            <p>© 2023</p>
        </div>
    </footer>
</template>

<style>

.footer-bar{
    display: flex;
    background-color: rgb(255, 255, 255);
    height: 60px;
    width: 100vw;
    position: relative;
    left: 0%;
    bottom: 0%;
    align-items: center;
    z-index: 1;
    box-shadow: 4px 0px 0px 2px rgba(0,0,0,.2);
    justify-content: space-between;
}

.contact-items{
    font-family: 'DM Sans';
    font-size: small;
    float: left;
    position: relative;
    left: 1%;
}

.attrib-details{
    font-family: 'DM Sans';
    font-size: small;
    float: right;
    position: relative;
    right: 1%;
    text-align: right;
}


.home-img{
    display: contents;
}

</style>