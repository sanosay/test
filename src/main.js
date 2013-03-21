(function(context){
	var Me = context.Me = function(array){
		this.array = array;
	};
	Me.prototype.each = function(fn){
		for(var i =0;i<this.array.length;i++){
			fn.call(this.array[i],i,this.array);
		}
	};
	Me.ForEach = function(array,fn){
		for(var i=0;i<array.length;i++){
			fn.call(array[i],array[i],i,array);
		}
	};
})(window);