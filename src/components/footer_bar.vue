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
    background-color: rgb(22, 100, 7);
    height: 80px;
    max-height: fit;
    width: 100vw;
    position: relative;
    left: 0%;
    bottom: 0%;
    align-items: start;
    z-index: 1;
    justify-content: space-between;
	box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
    border-top: 1px solid rgb( 0, 0, 0, 1);
    padding-bottom: 5%;
    padding-top: 1%;
}

.contact-items{
    font-family: 'DM Sans';
    color: rgb(255, 255, 255);
    font-size: small;
    float: left;
    position: relative;
    left: 1%;
}

.attrib-details{
    font-family: 'DM Sans';
    color: rgb(255, 255, 255);
    font-size: small;
    float: right;
    position: relative;
    right: 1%;
    text-align: right;
}


.home-img{
    display: contents;
}

@media screen and (max-width: 454px) {

    .contact-items {
        font-size: x-small;
        }

    .attrib-details {
        font-size: x-small;
        }
    }

</style>