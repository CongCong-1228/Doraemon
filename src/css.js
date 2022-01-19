
const string = `<style>
.head {
    height: 300px;
    width: 300px;
    border: 1px solid black;
    position: relative;
    left: 50%;
    top: 100px;
    margin-left: -150px;
    border-radius: 50%;
    background: #1E90FF;
}
.head .eye {
    height: 90px;
    width: 70px;
    border: 2px solid black;
    position: relative;
    left: 50%;
    top: 50px;
    margin-left: -35px;
    border-radius: 46%;
    position: absolute;
    background: #fff;
    z-index: 1;
}
.head .eye.left {
    transform: translateX(-34px);
}
.head .eye.right {
    transform: translateX(34px);
    
}
.eyeball {
    height: 18px;
    width: 18px;
    position: absolute;
    border-radius: 50%;
    background: black;
}
.eyeball.left{
    right: 10px;
    top: 60px;
}
.eyeball.right{
    left: 10px;
    top: 60px;
}
.face {
    height: 220px;
    width: 250px;
    border: 1px solid black;
    position: relative;
    left: 50%;
    margin-left: -125px;
    bottom: -79px;
    border-radius: 50%;
    background: #fff;
}
.nose {
    height: 40px;
    width: 40px;
    border: 2px solid black;
    position: relative;
    left: 50%;
    margin-left: -20px;
    top: 45px;
    border-radius: 50%;
    background: red;
}
.nose::after {
    content: '';
    display: block;
    position: absolute;
    height: 10px;
    width: 10px;
    right: 5px;
    top: 5px;
    background: white;
    border-radius: 50%;
}
.noseline {
    height: 85px;
    width: 0px;
    
    border: .1px solid black;
    position: relative;
    left: 50%;
    top: 44px;
}
.lines {
    height: 100px;
    width: 100px;
    position: relative;
    left: 50%;
    margin-left: -50px;
    bottom: 25px;
}
.lines.left {
    transform: translateX(-50px) translateY(-55px);
}
.lines.right {
    transform: translateX(50px) translateY(-155px);
}
.lines.left .line1 {
   border: .1px solid black;
    height: 0px;
    width:70px ;
    position: absolute;
    top: 50%;
    left: 0;
}
.lines.left .line2 {
    border: .1px solid black;
    height: 0px;
    width:70px ;
    position: absolute;
    top: 50%;
    transform: translateY(10px) rotate(-15deg);
    transform-origin: right;
    left: 0;
}
.lines.left .line3 {
    border: .1px solid black;
    height: 0px;
    width: 70px ;
    position: absolute;
    top: 50%;
    transform: translateY(-10px) rotate(15deg);
    transform-origin: right;
    left: 0;
}
.lines.right .line1 {
   border: .1px solid black;
    height: 0px;
    width:70px ;
    position: absolute;
    top: 50%;
    right: 0;
}
.lines.right .line2 {
    border: .1px solid black;
    height: 0px;
    width:70px ;
    position: absolute;
    top: 50%;
    transform: translateY(10px) rotate(15deg);
    transform-origin: left;
    right: 0;
}
.lines.right .line3 {
    border: .1px solid black;
    height: 0px;
    width: 70px ;
    position: absolute;
    top: 50%;
    transform: translateY(-10px) rotate(-15deg);
    transform-origin: left;
    right: 0;
}
.face .mouth {
    height: 150px;
    width: 180px;
    border-bottom: 2px solid #000;
    position: absolute;
    left: 50%;
    margin-left: -90px;
    bottom: 49px;
    border-radius: 0 0 45% 45%;
  
}
.neck {
    height: 40px;
    width: 180px;
    border: 2px solid black;
    position: relative;
    left: 50%;
    margin-left: -90px;
    bottom: -40px;
    background: red;
}
.neck::before {
    content: '';
    display: block;
    border:2px solid black;
    border-right: transparent;
    height: 40px;
    width: 40px;
    position: absolute;
    left: -20px;
    border-radius: 50% 0 0 50%;
    top: -2px;
    background: red;
}
.neck::after {
    content: '';
    display: block;
    border: 2px solid black;
    border-left: transparent;
    height: 40px;
    width: 40px;
    position: absolute;
    right: -20px;
    border-radius: 0 50% 50% 0;
    top: -2px;
    background: red;
}
.bell {
    border: 2px solid black;
    height: 40px;
    width: 40px;
    position: relative;
    left: 50%;
    margin-left: -20px;
    bottom: -20px;
    background: yellow;
    border-radius: 50%;
    overflow: hidden;
    animation: swing linear 1s infinite;
    transform-origin: top;
}

.bell .line1 {
    
    width: 50px;
    height: 1px;
    background: black;
    position: absolute;
    top: 6px
}
.bell .line2 {
    width: 40px;
    height: 2px;
    background: black;
    position: absolute;
    top: 11px
}
.bell .circle {
    width: 10px;
    height: 5px;
    border: 2px solid black;
    left: 50%;
    position: absolute;
    margin-left: -5px;
    top: 50%;
    border-radius: 50%;
    background: black;
}
.bell .line3 {
    height: 18px;
    width: 1px;
    background: black;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -.5px;   
}
@keyframes swing {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(-30deg);
    }
    66% {
        transform: rotate(30deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
</style>`

export default string