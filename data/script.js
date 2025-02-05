
*{
    font-family: 'Source Sans Pro', sans-serif;
    
}

body{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 255, 255);
    padding: 0px 50px;
    margin: 0px 50px;
}

p{
    font-family: "Times New Roman", Times, serif;
    font-style: italic;

}
/* navbar */

/* navbar positioning*/
nav{
    top: 0;
    background-color: rgba(255, 255, 255, 0.007);
    position: fixed;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
}

nav .headding{
    margin: 0px 20px;
    display: block;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100px;
    background-color: white;

}

h3{
    font-family: "Times New Roman", Times, serif;
    font-style:oblique;
    font-weight: bold;
}

nav .headding h2{
    margin: 0px 20px;
    margin-top: 5px;
}
nav .headding h3{
    bottom: 0;
    margin: 0px 20px;
}

nav .choices{
    display: flex;
    justify-content: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    background-color: rgb(255, 255, 255);
}

nav .choices table{
    display: table;
    border-radius: 800px;
    border-bottom: 2px solid rgb(2, 2, 2);
    
}

nav .choices tr{
    width: 100%;
}

nav .choices td{
    background-color: #33333300;
    align-items: center;
    text-align: center;
    display: table-cell;
    width: 25%;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
}

nav img{
    position: absolute;
    min-width: 80px;
    max-width: 80px;
    top: 40%;
    border-bottom: 2px solid black;
    border-radius: 500px;
    display: block;
}

nav tr:hover{
    background-color: white;
}

nav tr td:hover{
    cursor: pointer;
    background-color: rgba(168, 168, 168, 0.219);
}

/*navbar animation*/

.backRotation{
    animation: navBarbackRotation 1s forwards; /* Adjusted duration */
    transform-style: preserve-3d; /* Ensures 3D rotation effect */

}

@keyframes navBarbackRotation {
    from{
        transform: rotateX(0deg);
        top: 70%;
        min-width: 60px;
        max-width: 60px;
    }
    to{
        transform: rotateX(-360deg);
        top: 40%;
        min-width: 80px;
        max-width: 80px;
    }
}

.rotation{
    animation: navBarRotation 1s forwards; /* Adjusted duration */
    transform-style: preserve-3d; /* Ensures 3D rotation effect */
    top: 40%;
    
}

@keyframes navBarRotation {
    0%{
        transform: rotateX(0deg);
        top: 40%;
        min-width: auto;
        max-width: auto;
        width: 80px;
    }
    50%{
        transform: rotateX(180deg);
        width: 40px;
    }
    100%{
        transform: rotateX(360deg);
        top: 50%;
        width: 80px;
        min-width: auto;
        max-width: 15vw;
    }
}

.navBarUnscrolled{
    animation: scrolledUp 1s forwards;

}

@keyframes scrolledUp {
    from{
        transform: translateY(-55%);

        width: 100%;
    }
    to{
        transform: translateY(0);
        width: 80%;
    }
}

.navBarScrolled{
    animation: scrolledDown 1s forwards;
}


@keyframes scrolledDown {
    from{
        width: 80%;
        padding: 0% 0%;
    }
    to{
        width: 100%;       
        
    }
}

.designlines{
    left: 50%;
    right: 50%;
    width: 50px;
    height: 200px;
    position: absolute;
    transform: translateX(-25px) translateY(0px);
    background-color: rgb(255, 255, 255);
    border-radius: 25px;
    animation: rollOut 1s forwards;
}

@keyframes rollOut {
    from{
        height: 0px;
    }
    to{
        transform: translateX(-25px) translateY(-75px);
        height: 200px;
    }
}

.smallBarChoices {
    box-shadow: -2px 1px 10px rgb(12, 12, 12);
    min-height: 70px;
    color: rgb(255, 255, 255);
    border-bottom: 2px solid rgb(167, 167, 167);
    width: 100%;
    
}

/* /navbar */


h1{
    font-weight: 1200;
    font-size: 35px;
    color: rgb(1, 73, 73);
    border-bottom: 1px solid rgba(128, 128, 128, 0.925);
}


h2{
    font-weight: 1200;
    font-size: 30px;
    color: rgb(1, 73, 73)
}


.font{
    font-size: large;
}

.fontT{
    font-size: large;
}

.fontD{
    font-size: x-large;
    color: red;
}

.copy-tooltip {
    visibility: hidden;
    position: absolute;
    transform: translateY(-25px) translateX(15%);
    background-color: #33333367;
}
.cpy:hover .copy-tooltip  {
    visibility: visible;
    opacity: 1;
}

table {
    width: 100%;
    margin: 20px 0;
    font-size: 18px;
    text-align: left;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 12px;
}

th {
    background: #343a40;
    color: white;
    text-transform: uppercase;
}

tr:hover {
    background: #e9ecef;
}

td {
    color: #333;
}


.hamburger {
    font-size: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: row ;
    padding: 0px 2%;
}

.showList {
    width: 50px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px black;
    background-color: rgb(228, 228, 228);
    animation: displayList 0.5s forwards;
    position: fixed; /* Keeps it relative to the viewport */
    z-index: 1000; /* Keeps it above other elements */
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: rgb(0, 0, 0);
    left: 50%; /* Centers horizontally */
    transform: translateX(-50%); /* Adjusts the element to be centered */
}

@keyframes displayList {
    0% {
        left: 50%;
        transform: translateX(-50%);
        width: 25%; /* Start small */
        height: 0vh; /* Start with zero height */
        opacity: 0; /* Hidden initially */
        z-index: -1;
    }

    100% {
        left: 50%;
        transform: translateX(-50%);
        width: 25%;
        min-width: 400px; /* Final width */
        height: 90vh; /* Almost full screen height */
        opacity: 1; /* Fully visible */
        z-index: -1;
    }
}


.showList2{
    width: 50px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px black;
    background-color: rgb(228, 228, 228);
    animation: displayList2 0.5s forwards;
    position: fixed; /* Keeps it relative to the viewport */
    z-index: 1000; /* Keeps it above other elements */
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: rgb(0, 0, 0);
    left: 50%; /* Centers horizontally */
    transform: translateX(-50%); /* Adjusts the element to be centered */
    
}

@keyframes displayList2 {
    0% {
        left: 50%;
        transform: translateX(-50%);
        width: 100%; /* Start small */
        height: 0vh; /* Start with zero height */
        opacity: 0; /* Hidden initially */
        z-index: -1;
    }

    100% {
        left: 50%;
        transform: translateX(-50%);
        width: 100%; /* Final width */
        height: 90vh; /* Almost full screen height */
        opacity: 1; /* Fully visible */
        z-index: -1;
    }
}

.removeList{
    
    animation: hideList 0.5s forwards;
    position: absolute;
    z-index: -1;
}

@keyframes hideList {
    0% {
        left: 50%;
        transform: translateX(-50%);
        width: 25%; /* Final width */
        height: 90vh; /* Almost full screen height */
        opacity: 1; /* Fully visible */
        z-index: -1;

    }

    100% {

        left: 50%;
        transform: translateX(-50%);
        width: 25%; /* Start small */
        height: 0vh; /* Start with zero height */
        opacity: 0; /* Hidden initially */
        z-index: -1;

    }
}
.removeList2{
    
    animation: hideList2 0.5s forwards;
    position: absolute;
    z-index: -1;
}

@keyframes hideList2 {
    0% {
        left: 50%;
        transform: translateX(-50%);
        width: 100%; /* Final width */
        height: 90vh; /* Almost full screen height */
        opacity: 1; /* Fully visible */
        z-index: -1;

    }

    100% {

        left: 50%;
        transform: translateX(-50%);
        width: 100%; /* Start small */
        height: 0vh; /* Start with zero height */
        opacity: 0; /* Hidden initially */
        z-index: -1;

    }
}

.mainPagepicture{
    min-width: 60%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid black;
    border-radius: 20px;
    

}

.main{
    border-radius: 20px;
    border: 1px solid black;
    padding: 50px;
    
}

.ms{
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.185);
    border-radius: 20px;
    width: 90%;
}
.mms{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 25px;
    font-size: 15px;
    overflow: hidden;
    width: 90%;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 20px;
    }

.mms:hover{
    background-color: rgba(133, 133, 133, 0.103);
    border-radius: 20px;
    
}

.ms p{
    padding: 5px 25px;
    margin: 2px;
    font-size: 17px;

    
}

.ms p:hover{
    font-weight: bold;

}

.animationLeftSlide{
    animation: lss 0.5s forwards
}

@keyframes lss {
    0%{
        height: 0;
    }

    100%{
        height: 200px;

    }
}
.animationUnSlide{
    animation: uss 0.5s forwards
}


@keyframes uss {
    0%{
        height: 200px;
    }

    99%{
        
        height: 0px;
    }
    100%{
        display: none;
    }
}

.clicked{
    border-bottom: 2px solid rgb(9, 51, 58);
    border-left: 2px solid rgb(9, 51, 58);
    border-right: 2px solid rgb(9, 51, 58);
    border-radius: 20px;
}
.clicked h3{
    border-bottom: 2px solid gray;
    border-radius: 20px;
    padding: 20px;
}

@media screen and (max-width: 768px) {
    .mms{
        
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        margin: 5px;
        font-size: 13px;
        overflow: hidden;
        
        width: 75%;
    }
    .ms p{
        padding: 0px 25px;
        margin: 10px;
        font-size: 16px;

    }
    .showList2{
        padding-top: 25px;
    }
    .headding{
        max-height: 70px;
    }
    .ms{
        max-height: 50%;
     }
    .smallHead{
        padding: 0px 2%;
        color: white;
        font-family: "Times New Roman", Times, serif;
        font-style: italic;
        font-weight: bold;
        text-transform: uppercase; 
        font-size: 3vw;
    }
    .designlines{
        background-color: rgba(255, 255, 255, 0);
    }
}

.Listplaceholder{
    display: none;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    background-color: rgba(241, 0, 0, 0);
    padding: 10px;
    text-align: center;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

}
.Listplaceholder .altor{

    background-color: rgba(20, 20, 20, 0.788);
    border-radius: 10px;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.smallHead{
    padding: 0px 10%;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase; /* Optional, makes text uppercase */
}

.clickedDiv{
    animation: downss 0.5s forwards;
    border-top: 4px solid rgb(0, 0, 0);
    border-bottom: 4px solid rgb(0, 0, 0);
    display: flex;
}

@keyframes downss {
    0%{
        opacity: 100%;
        height: 0px;
    }

    100%{
        opacity: 100%;
        height: 150px;
    }
}

.unClickedDiv{
   
    animation: Upss 0.5s forwards;
}

@keyframes Upss {
    0%{
        height: 150px;
    }

    99%{
        opacity: 0%;
        height: 0px;
    }


}

.hoverStyle{
    font-weight: bold;
    width: 90%;
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
}

.hoverStyle:hover{
    cursor: pointer;
    font-weight: lighter;
    border-radius: 20px;
    border-bottom: 1px solid white;
}

/*background-color: rgb(20, 20, 20);*/
.cssversion::after {
content: "CSS Verzia: 1.05 "
}
