const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry(100, 100, 100);



const material = [new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("img/arid2_ft.jpg"), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("img/arid2_bk.jpg"), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("img/arid2_up.jpg"), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("img/arid2_dn.jpg"), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("img/arid2_rt.jpg"), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("img/arid2_lf.jpg"), side: THREE.DoubleSide } )
];
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


const light = new THREE.AmbientLight( 0xFFFFFF, 0.3 ); // soft white light
scene.add( light );

camera.position.z = 3;
const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();
function animate() {
	requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
}
animate();