function draw(){
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext){
    var ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.clearRect(10,10,50,40);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);

    } else {console.log("Unsupported Browsers");}
}