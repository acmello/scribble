window.Paint = {};
var canvas
	,ctx;
		
;(function(exports){
	var currentLineWidth
		,currentColor
		,li
	 	,keepDrawing;
	
	function init(){
		canvas = document.getElementById("stage");
		ctx = canvas.getContext('2d');
		
		setup.defaultValues();

		eventHandler.callbackMouseMove();
		eventHandler.callbackMouseDown();
		eventHandler.callbackMouseUp();
		eventHandler.callbackClickColorElement();
	}
				
	var eventHandler = {
		callbackMouseMove: function(){
			canvas.addEventListener("mousemove", function(e){
				if(keepDrawing) {	
					ctx.strokeStyle = currentColor;
					ctx.lineWidth = currentLineWidth;
					ctx.lineTo(e.layerX, e.layerY);
					ctx.stroke();
				}
			})
		},
					
		callbackMouseDown: function(){
			canvas.addEventListener("mousedown", function(e){
				ctx.beginPath();
				ctx.moveTo(e.layerX, e.layerY);
				keepDrawing = true;
			})
		},

		callbackMouseUp: function(){
			canvas.addEventListener("mouseup", function(e){
				keepDrawing = false;
			})
		},

		callbackClickColorElement: function(){ 
			$(".color-element").bind("click", function(e){
				if(e) { currentColor = this.id };
			});
		}
	}

	var setup = {
		defaultValues: function(){
			currentColor = "#000000";
			currentLineWidth = "4";
		},
	}
				
	exports.init = init;
				
})(window.Paint);
			
window.onload = Paint.init;