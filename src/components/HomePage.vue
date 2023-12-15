<template>
    <meta name="viewport" content="width=device-width, initial_scale=1.0">
    <main>
        <a id="hook" href="top"></a>
        <header>
            <component v-if="isScreenSmall" :is="smallBar"></component>
            <component v-else :is="largeBar"></component>
        </header>
        <section ref="introsection" id="intro-grid"></section>
        <section id="intro-img"></section>
        <section id="intro">
                <div id="intro-mid-section">
                    <a id="intro-linker" href="#products-hook"></a>
                    <p id="intro-catch-line">&hairsp;&hairsp;Track and tackle&hairsp;&hairsp;</p>
                    <p id="intro-catch-line">&hairsp;&hairsp;your emissions&hairsp;&hairsp;</p>
                    <p id="intro-text">Lorum ipsum consectetur adipiscing elit, sed do eiusmod ut al labore et dolore magna aliqua. Ut enim ad minim veniam e inexpiabili odio delendam esse Carthaginem pronuntiba.</p>
                    <div id="triangle-container">
                        <div id="triangle-barrier-down"></div>
                        <div id="triangle-down"></div>
                    </div>
                    <div id="triangle-down-lrg-container">
                        <div id="triangle-barrier-down-1"></div>
                        <div id="triangle-barrier-down-2"></div>
                        <div id="triangle-barrier-down-3"></div>
                    </div>
                </div>
        </section>
        <section id="products">
            <a id="products-hook"></a>
            <div id="products-block-l">
                <a id="hook"></a>
                <div id="products-content">
                    <p id="products-head">A Bespoke Emissions Dashboard</p>
                    <div id="products-triangles-container"></div>
                    <div id="products-triangle-barrier-down"></div>
                    <div id="triangle-down-products"></div>
                    <ul id="products-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium:
                        <br>
                        <br>
                        <li>Totam rem aperiam</li>
                        <br>
                        <li>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</li>
                        <br>
                        <li>Beatae vitae dicta sunt explicabo</li>
                        <br>
                        <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
                    </ul>
                </div>
            </div>
            <div id="products-block-r">
                <p id="products-head">[Placeholder image]</p>
            </div>
            <div id="about-block-l">
                <a id="about-hook" href="about-hook"></a>
                <div id="about-content">
                    <p id="products-head">A WhatsThePayBack<wbr> Company</p>
                    <div id="products-triangles-container"></div>
                    <div id="about-triangle-barrier-down"></div>
                    <p id="products-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    <p id="products-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    <p id="products-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    <p id="products-text">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                </div>
            </div>
            <div id="about-block-r">
                <div class="about-block-r-headshots"></div>
                <p id="about-text">Paul Bleasdale<br>[BIO]</p>
                <div class="about-block-r-headshots"></div>
                <p id="about-text">Ian Douglas<br>[BIO]</p>
            </div>
        </section>
        <section id="action">
            <div id="action-img"></div>
            <div id="action-button">
                <p id="action-button-text">Sign Up</p>
            </div>
        </section>
    </main>
    <footer_bar/>
</template>

<script>

import navigation_bar from './navigation_bar.vue'
import navigation_bar_mobile from './navigation_bar_mobile.vue'
import footer_bar from './footer_bar.vue'

export default {

    name: 'HomePage',

    components: {
        navigation_bar,
        navigation_bar_mobile,
        footer_bar,
    },

    data() {

        return {
            smallBar: 'navigation_bar_mobile',
            largeBar: 'navigation_bar',
            screenWidth: window.innerWidth
        };
    },

    computed: {
        isScreenSmall() {
            return this.screenWidth < 768;
        }
    },

    mounted() {
        window.addEventListener('resize', this.updateScreenWidth);
    },

    unmounted() {
        window.removeEventListener('resize', this.updateScreenWidth);
    },

    methods: {
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        }
    }
};

</script>

<style>

html {
    scroll-behavior: smooth;
}

main {
    margin-top: 2em;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100vw;
}

#intro-linker {
    position: absolute;
    top: 30%;
    left: 10%;
    width: 45%;
    height: 90%;
    z-index: 7;
}

#products-hook {
    position: absolute;
    top: 100%;
}

#about-hook {
    position: absolute;
    top: -11%;
}

#intro-mid-section:hover {
    #triangle-down {border-top-color: rgba(255, 255, 255); animation-duration: 0s;};
    #triangle-barrier-down {border-top-color: #ffffff; animation-duration: 0s;};
    #triangle-barrier-down-1 {animation-name: triangle-down-animation; animation-duration: 3s; animation-iteration-count: 100; animation-direction: reverse;};
    #triangle-barrier-down-2 {animation-name: triangle-down-animation; animation-duration: 3s; animation-iteration-count: 100; animation-direction: reverse;};
    #triangle-barrier-down-3 {animation-name: triangle-down-animation; animation-duration: 3s; animation-iteration-count: 100; animation-direction: reverse;};
    #triangle-down-lrg-container {animation-name: triangles-move-animation; animation-duration: 3s; animation-iteration-count: 100;};

}

@keyframes triangles-move-animation {
    0% {padding-top: 0%;}
    50% {padding-top: 15%;}
    100% {padding-top: 7.5%;}
}

@keyframes triangle-down-animation {
  0%   {border-top: 7.31px solid rgba(255, 255, 255, 0);}
  75%  {border-top: 7.31px solid rgba(255, 255, 255, 1);}
  100%  {border-top: 7.31px solid rgba(255, 255, 255, 0);}

}

@keyframes triangle-norm-animation {
    0%   {border-top: 7.31px solid rgba(201, 211, 120, 1);}
    50%  {border-top: 7.31px solid rgba(255, 255, 255, 1);}
    100%  {border-top: 7.31px solid rgba(201, 211, 120, 1);}

}

@keyframes triangle-down-norm-animation {
    0%   {border-top: 15.31px solid rgba(201, 211, 120, 1);}
    50%  {border-top: 15.31px solid rgba(255, 255, 255, 1);}
    100%  {border-top: 15.31px solid rgba(201, 211, 120, 1);}
}

#intro-grid {
    position: absolute;
    background: url('/src/assets/grid.png') repeat;
    opacity: 0.01;
    height: 100vh;
    width: 100vw;
    z-index: 3;
    opacity: 50%;
}

#intro-img {
    position: absolute;
    background: url('/src/assets/intro-back.jpg') no-repeat center center, rgb(0, 0, 0, .35);
    background-size: cover;
    padding: 5em;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    opacity: 100%;
}

#intro {
    position: relative;
    display: block;
    padding: 5em 1em;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.3);
    border-bottom: 7.31px solid rgb(0, 0, 0);
    z-index: 4;
}

#intro-mid-section {
    position: relative;
    padding-top: 15%;
    padding-left: 10%;
    margin-top: auto;
    margin-bottom: auto;
    width: 90%;
    min-width: 63%;
    color:#fff;
    z-index: 6;
}

#intro-catch-line {
    position: relative;
    float: left;
    width: fit-content;
    background-color: rgb(0, 0, 0, .35);
    font-family: 'DM Sans';
    font-size: 44px;
    z-index: 5;
    box-shadow: 2px 2px 4px -2px rgba(0,0,0,.2);
    text-decoration: rgba(201, 211, 120, 1);
    white-space: nowrap;
    font-kerning: none;
    }

#intro-text {
    font-family: 'DM Sans';
    font-size: 20px;
    text-shadow: 1px 1px rgb(0, 0, 0);
    width: 50%;
    min-width: 400px;
    padding-top: 2%;
    padding-bottom: 3%;
    z-index: 5;
    text-align: left;
    clear: both;
}

#triangle-container {
    position: absolute;
    width: 100%;
    display: flex;
}

#triangle-down {
	width: 0;
	height: 0;
	
	border-right: 10px solid transparent; 
	border-left: 10px solid transparent; 

	border-top: 15.31px solid rgba(201, 211, 120, 1);
    
    position: relative;
    float: left;
    animation-name: triangle-down-norm-animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
}

#triangle-down-lrg-container {
    padding-top: 7.5%;
    height: 100%;
    width: 60%;
}

#triangle-down-small {
	width: 0;
	height: 0;
	
	border-right: 10px solid transparent; 
	border-left: 10px solid transparent; 

	border-top: 15.31 solid rgba(201, 211, 120, 0);
    
    padding-top: 3%;
    display: block;
    position: relative;
    left: 46%;
    animation-name: triangle-animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
}

#triangle-barrier-down {
	width: 0;
	height: 0;
	
	border-right: 5px solid transparent; 
	border-left: 5px solid transparent; 

    border-top: 7.31px solid rgba(201, 211, 120, 1);

    position: absolute;
    padding-right: 35.3%;
    float: right;

    animation-name: triangle-norm-animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
}


#triangle-barrier-down-1 {
	width: 0;
	height: 0;
	
	border-right: 5px solid transparent; 
	border-left: 5px solid transparent; 

    border-top: 5.31px solid rgba(255, 255, 255, 0);

    position: relative;
    left: 25%;

    padding-right: 25.3%;
    padding-top: 2%;
    display: block;
}

#triangle-barrier-down-2 {
	width: 0;
	height: 0;
	
	border-right: 5px solid transparent; 
	border-left: 5px solid transparent; 

    border-top: 5.31px solid rgba(255, 255, 255, 0);

    position: relative;
    left: 30%;

    padding-right: 15.3%;
    padding-top: 2%;
    display: block;
}

#triangle-barrier-down-3 {
	width: 0;
	height: 0;
	
	border-right: 6px solid transparent; 
	border-left: 6px solid transparent; 

    border-top: 5.31px solid rgba(255, 255, 255, 0);
    
    position: relative;
    left: 35%;

    padding-right: 5.3%;
    padding-top: 2%;
    display: block;

}

#products {
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(232, 239, 235);
    max-height: fit-content;
    padding-top: 5%;
}

#products-block-l {
    float: left;
    overflow: auto;
    background-color: rgb(232, 239, 235);
    width: 50%;
    min-width: 50%;
    height: 100vh;
    max-height: fit-content;
    justify-content: center;
    align-items: center;
}

#products-block-r {
    float: left;
    background: url('/src/assets/graph-placeholder.png') no-repeat center center;
    background-size: cover;
    background-color: rgb(250, 252, 251);
    width: 50%;
    min-width: 50%;
    height: 100vh;
    box-shadow: 2px 0px 10px rgba(0,0,0,.2);
    justify-content: center;
    align-items: center;
}

#products-content {
    padding-top: 6%;
}

#products-triangles-container {
    position: absolute;
    width: 100%;
    display: flex;
}

#products-triangle-barrier-down {
	width: 0%;
	height: 0;
	
	border-right: 5px solid transparent; 
	border-left: 5px solid transparent; 

    border-top: 7.31px solid rgba(201, 211, 120, 1);
    position: relative;
    left: 10%;
    padding-left: 20%;
    padding-right: 45.5%;
	
}

#products-head {
    font-family: 'DM Sans';
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    font-size: 34px;
}

#products-text {
    font-family: 'DM Sans';
    font-size: 20px;
    font-size-adjust: 0.5;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 1em;
    padding-bottom: 1em;
    list-style-position: inside;
    z-index: 4;
}

#products-text li {
    padding-left: 2%;
}

#products-placeholder {
    height: 47.12%;
    width: 80%;
    border-radius: 4%;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2);
}

#about {
    display: flex;
    background-color: rgb(232, 239, 235);
    width: 100vw;
    height: 93vh;
}

#about-block-l {
    float: left;
    position: relative;
    background-color: rgb(250, 252, 251);
    width: 50%;
    min-width: 50%;
    height: 100%;
    min-height: 100%;
    box-shadow: 2px 0px 10px rgba(0,0,0,.2);
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
    hyphens: manual;
    border-bottom: 5.31px solid rgba(250, 252, 251, 1);
    overflow: auto;
    padding-bottom: 5%;

}

#about-triangle-barrier-down {
	width: 0;
	height: 0;
	
	border-right: 5px solid transparent; 
	border-left: 5px solid transparent; 

    border-top: 7.31px solid rgba(201, 211, 120, 1);
    position: relative;
    left: 10%;
    padding-left: 20%;
    padding-right: 42.5%;
}

#about-block-r {
    vertical-align: middle;
    background-color: rgb(232, 239, 235);
    width: 50%;
    min-width: 50%;
    height: 100vh;
    max-height: 200vh;
    border-bottom: 5.31px solid rgba(232, 239, 235, 1);
}

.about-block-r-headshots {
    display: inline-block;
    height: 50%;
    width: 50%;
    color: lime;
    background: url("/src/assets/headshot-placeholder.png") no-repeat center center;
    vertical-align: middle;
}

#about-text {
    display: inline-block;
    font-family: 'DM Sans';
    font-size: 20px;
    width: 50%;
    text-align: center;
    vertical-align: middle;
}

#about-splitter {
    position: relative;
    display: flex;
    background-color: rgb(255, 255, 255);
    width: 1%;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2);
}

#about-content {
    padding-top: 5%;
}

#action {
    display: inline-flex;
    background-color: rgba(0, 0, 0, 1);
    width: 100vw;
    height: 35vh;
    border-top: 7.31px solid rgb(0, 0, 0);
}

#action-img {
    position: absolute;
    height: inherit;
    width: inherit;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(0, 0, 0, 0.5)), url('/src/assets/intro-back.jpg') center/cover;
    opacity: 30%;
}

#action-button {
    display: flex;
    background-color: rgba(49, 126, 34);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 5px;
	box-shadow: 2px 2px 2px 5px rgba(0,0,0,0.1);
    width: 20.5%;
    left: 50%;
    min-width: fit-content;
    height: 35%;
    padding-left: 5%;
    padding-right: 5%;
    margin: auto;
    z-index: 3;
    cursor: pointer;
}

#action-button-text {
    position: relative;
    top: 13%;
    margin: 0 auto;
    text-align: center;
    font-family: 'DM Sans';
    font-size: 46px;
    color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
}

@media screen and (max-width: 912px) {

    #products-block-l {
        width: 100%;
    }
    
    #products-block-r {
        width: 100%;
    }
    
    #about-block-l {
        width: 100%;
    }

    #about-block-r {
        width: 100%;
    }
}

@media screen and (max-width: 688px) {

    #intro-mid-section {
        width: 90%;
        position: relative;
        padding-left: 0%;
        margin: 0 auto;
        float: center;
    }

    #intro-catch-line {
        font-size: 42px;
        text-align: center;
        margin: 0 auto;
        float: none;
        width: fit-content;
    }

    #intro-text {
        padding-top: 3%;
        padding-bottom: 3%;
        width: 80%;
        min-width: fit-content;
        font-size: 20px;
        text-align: justify;
        float: center;
        margin: 0 auto;
        padding-top: 10%;
        padding-bottom: 10%;
    }

    #triangle-barrier-down {
        width: 80%;
    	border-right: 5px solid transparent; 
        position: absolute;
        margin: 0 auto;
        left: 15.5%;
        opacity: 0%;
    }
    
    #triangle-down {
        opacity: 0%;
    }

    #triangle-down-lrg-container {
        position: relative;
        margin: 0 auto;
        width: 87%;
        left: 11.5%;
    }

    #intro-linker {
        position: absolute;
        width: 70vw;
        height: 70vh;
    }
    
    #intro-mid-section {
        #triangle-down {border-top-color: rgba(255, 255, 255); animation-duration: 0s;};
        #triangle-barrier-down {border-top-color: #ffffff; animation-duration: 0s;};
        #triangle-barrier-down-1 {animation-name: triangle-down-animation; animation-duration: 3s; animation-iteration-count: 100; animation-direction: reverse;};
        #triangle-barrier-down-2 {animation-name: triangle-down-animation; animation-duration: 3s; animation-iteration-count: 100; animation-direction: reverse;};
        #triangle-barrier-down-3 {animation-name: triangle-down-animation; animation-duration: 3s; animation-iteration-count: 100; animation-direction: reverse;};
        #triangle-down-lrg-container {animation-name: triangles-move-animation; animation-duration: 3s; animation-iteration-count: 100;};

    }

}

@media screen and (min-width: 1536px) {
    
    #intro-catch-line {
        font-size: 64px;
    }

    #intro-text {
        font-size: 32px;
    }

    #intro-mid-section {
        padding-top: 5%;
        top: 20%;
    }

}

@media screen and (orientation: landscape) and (max-width: 688px) {
    #intro {
        width: 100%;
        height: 150vh;
    }

    #intro-grid {
        width: 100%;
        height: 150vh;
    }

    #intro-img {
        width: 100%;
        height: 150vh;
    }

    #intro-mid-section {
        height: 25vh;
        max-height: 50vh;
        max-width: 100%;
        padding-top: 0%;
    }

    #intro-catch-line {
        max-width: 100%;
        height: fit-content;
    }

    #intro-text {
        max-width: 100%;
    }

    #products-block-l {
        width: 100%;
        height: 150vh;
    }

    #about-block-r {
        width: 100%;
        height: 150vh;
    }

    #action-button {
        min-height: 90px;
    }
}

@font-face {
    font-family: 'DM Sans';
    src: url('/src/assets/fonts/DMSans-VariableFont_opsz,wght.ttf');
}

@font-face {
    font-family: 'Raleway';
    src: url('/src/assets/fonts/Raleway-VariableFont_wght.ttf')
}

</style>