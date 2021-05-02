var scene , camera , renderer ;

//set up  environnement -
//initiallize scene, camera ,object and renderer

 var init = function () {
    //(1)create the scene 
   
    scene= new  THREE.scene(),
    scene.background = new THREE .color (0xababab),

    //(2) create an locate the camera 
    camera = new THREE.PerspectiveCamera(30,
         window.innerwidth / window.innerheight,
         1, 1000);
    camera.position.z= 5;
   
    //(3) create and  locate  the  objects on the  scene  

    //(4) create the renderer 
    renderer =new THREE.webGLRenderer();
    renderer.setSize(window.innerWidht , window.innerheight);

    document.body.appendChild(renderer.domElement);

};

//main animation  loop-calls every 50 ms minimum 
var  mainLoop =function(){
    renderer.render(Scene,Camera);
    requestAnimationFrame(mainLoop);
};

///////////
init();
mainLoop();
