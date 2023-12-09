<template>
    <meta name="viewport" content="width=device-width, initial_scale=1.0">
    <main>
        <a href="top"></a>
        <header>
            <navigation_bar/>
        </header>
        <section ref="introsection" id="intro-grid"></section>
        <section id="intro-img"></section>
        <section id="intro">
            <div id="intro-mid-section">
                <p id="intro-catch-line">Track and tackle your emissions</p>
                <p id="intro-text">Lorum ipsum consectetur adipiscing elit, sed do eiusmod ut al labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div id="triangle-container">
                    <div id="triangle-barrier-down"></div>
                    <div id="triangle-down"></div>
                </div>
            </div>
        </section>
        <section id="products">
            <a id="products-hook"></a>
            <div id="products-block-l">
                <div id="products-content">
                    <p id="products-head">A Bespoke Emissions Dashboard</p>
                    <div id="products-triangles-container"></div>
                    <div id="products-triangle-barrier-down"></div>
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
            </div>
        </section>
        <section id="about">
            <a id="about-hook" href="about-hook"></a>
            <div id="about-block-l">
                <div id="about-content">
                    <p id="products-head">A WhatsThe&shy;PayBack Company</p>
                    <div id="products-triangles-container"></div>
                    <div id="about-triangle-barrier-down"></div>
                    <p id="products-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    <p id="products-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    <p id="products-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    <p id="products-text">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                </div>
            </div>
            <div id="about-block-r">

            </div>
        </section>
    </main>
    <footer_bar/>
</template>

<script>

import navigation_bar from './navigation_bar.vue'
import footer_bar from './footer_bar.vue'

export default {

    components: {
        navigation_bar,
        footer_bar
    }
}

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
}

#products-hook {
    position: relative;
    bottom: 8%;
}

#about-hook {
    position: relative;
    bottom: 8%;
}

#intro-mid-section:hover {
		#triangle-down {border-top-color: rgba(255, 255, 255)};
        #triangle-barrier-down {border-top-color: rgba(255, 255, 255)};
	}

#intro-grid {
    position: absolute;
    background: url('/src/assets/grid.png') repeat 0.01%;
    height: 100vh;
    width: 100vw;
    z-index: 3;
    opacity: 50%;
}

#intro-img {
    position: absolute;
    background: url('/src/assets/intro-back.jpg') no-repeat center center, rgb(0, 0, 0, .35);
    background-size: cover;
    padding: 5em 1em;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    opacity: 100%;
}

#intro {
    position: relative;
    padding: 5em 1em;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.2);
   /* border-bottom: 10px solid rgb(150, 150, 150);
    border-image: linear-gradient(to bottom, #818181 0%, rgb(232, 239, 235) 100%) 0 0 100% 0; */
    border-bottom: 7.31px solid rgb(0, 0, 0);
    z-index: 4;
    overflow: auto;
}

#intro-mid-section {
    display: inline-flexbox;
    padding-left: 10%;
    padding-top: 10%;
    padding-bottom: 3%;
    width: 49.5%;
    color:#fff;
    z-index: 6;
}

#intro-catch-line {
    background-color: rgb(0, 0, 0, .35);
    font-family: 'DM Sans';
    font-size: 34px;
    width: 92%;
    z-index: 5;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,.2);
}

#intro-text {
    font-family: 'DM Sans';
    font-size: 20px;
    width: 100%;
    padding: 3%;
    padding-top: 1%;
    z-index: 5;

}

#triangles-container {
    position: absolute;
    width: inherit;
    display: flex;
}

#triangle-down {
	width: 0;
	height: 0;
	
	border-right: 10px solid transparent; 
	border-left: 10px solid transparent; 

	border-top: 15.31px solid rgba(201, 211, 120, 1);
    
    position: absolute;
    float: right;
    left: 46%;

}

#triangle-barrier-down {
	width: 0;
	height: 0;
	
	border-right: 0px solid transparent; 
	border-left: 5px solid transparent; 

    border-top: 7.31px solid rgba(201, 211, 120, 1);

    position: absolute;
    padding-right: 35.3%;
    float: right;
	
}

#products {
    display: flex;
    background-color: rgb(232, 239, 235);
    width: 100vw;
    height: 93vh;
    max-height: 186vh;
}

#products-block-l {
    position: relative;
    display: block;
    overflow: auto;
    background-color: rgb(232, 239, 235);
    width: 50%;
    height: 100%;
    z-index: 0;
    justify-content: center;
    align-items: center;
}

#products-block-r {
    background: url('/src/assets/graph-placeholder.png') no-repeat center center;
    background-size: cover;
    position: relative;
    display: flex;
    background-color: rgb(250, 252, 251);
    width: 50%;
    height: 100%;
    z-index: 1;
    box-shadow: -3px 0px 10px rgba(0,0,0,.2);
    justify-content: center;
    align-items: center;
}

#products-splitter {
    position: relative;
    display: flex;
    background-color: rgb(255, 255, 255);
    width: 1%;
    box-shadow: 2px 0px 4px 2px rgba(0,0,0,.2);
}

#products-content {
    padding-top: 15%;
}

#products-triangles-container {
    position: absolute;
    width: 100%;
    display: flex;
}

#products-triangle-barrier-down {
	width: 0;
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
    position: relative;
    display: block;
    overflow: auto;
    background-color: rgb(250, 252, 251);
    width: 50%;
    height: 100%;
    max-height: max-content;
    z-index: 1;
    box-shadow: 2px 2px 10px rgba(0,0,0,.2);
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
    hyphens: manual;
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
    position: relative;
    display: flex;
    background-color: rgb(232, 239, 235);
    width: 50%;
    height: 100%;
    z-index: 0;
    justify-content: center;
    align-items: center;
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


</style>