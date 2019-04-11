THREE.Nbody = function () {
	this.tick = 0.3;  
};
THREE.Nbody.prototype = {
	position: function( centermass, satellite ){//apply body's gravity to the satellite's momentum
		var distance = new THREE.Vector3();
		var momentum = new THREE.Vector3();
		var G = 0.0000000000667384;//gravity
		var H, radius;
		
		//determine distance between the body and the satellite
		if( centermass.position && satellite.position ){
			distance.subVectors(centermass['position'], satellite['position']);
		}
		radius = distance.length();
		
		//momentum
		H = G * centermass.mass / Math.pow( radius * 1000, 2 );
		momentum.x = ( distance.x / radius ) * H;
		momentum.y = ( distance.y / radius ) * H;
		momentum.z = ( distance.z / radius ) * H;
		this.updateMomentum(satellite, momentum);
		
		//update mesh position
		this.updatePosition( satellite, centermass );
	},
	updateMomentum: function(satellite, force){
		satellite['momentum'].x += force.x / 1000 * this.tick;
		satellite['momentum'].y += force.y / 1000 * this.tick;
		satellite['momentum'].z += force.z / 1000 * this.tick;
	},
	updatePosition: function(satellite, centermass){
		satellite['position'].x += satellite['momentum'].x * this.tick; 
		satellite['position'].y += satellite['momentum'].y * this.tick;
		satellite['position'].z += satellite['momentum'].z * this.tick;
	}
}
if(!THREE.Mesh.momentum){THREE.Mesh.prototype.momentum = new THREE.Vector3();}
if(!THREE.Mesh.mass){THREE.Mesh.prototype.mass = 0;}
