export default  {
	add(nodes, name) {
		if(nodes.length > 1){
			let i;
			for(i = 0; i < nodes.length; i++){
				if(!this.has(nodes[i],name)){
					nodes[i].classList.add(name);
				}
			}
		}else{
			if(!this.has(nodes,name)){
				nodes.classList.add(name);
			}
		}

	},

	has(nodes, name) {
		let nodeHasClass = false;

		if(nodes.length > 1){
			let i;
			for(i = 0; i < nodes.length; i++){
				if(nodes[i].classList.contains(name) === true){
					nodeHasClass = true;

					break;
				}
			}
		}else{
			nodeHasClass = nodes.classList.contains(name);
		}

		return nodeHasClass;
	},

	remove : function(nodes, name){
		if(nodes.length > 1){
			let i;
			for(i = nodes.length - 1; i >= 0; i--){
				if(this.has(nodes[i],name)){
					nodes[i].classList.remove(name);
				}
			}
		}else{
			if(this.has(nodes,name)){
				nodes.classList.remove(name);
			}
		}

	},

	toggle(nodes, name){
		if(nodes.length > 1){
			let i;
			for(i = 0; i < nodes.length; i++){
				nodes[i].classList.toggle(name);
			}
		}else{
			nodes.classList.toggle(name);
		}

	},
};
