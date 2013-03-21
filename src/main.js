(function(context){
	var Me = context.Me = function(array){
		this.array = array;
	};
	Me.prototype.each = function(fn){
		for(var i =0;i<this.array.length;i++){
			fn.call(this.array[i],i,this.array);
		}
	};
})(window);