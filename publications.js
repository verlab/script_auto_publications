window.onload = function () {
console.log("[DEBUG] Loading page...");
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light1",
	title:{
		text: ""
	},
	data: [{        
		type: "column",
      	indexLabelFontSize: 16,
        name: "Number of Publications",
        color: "#014D65",
        showInLegend: "true",
		dataPoints: [
			{ y: 450, label:"1990"},
			{ y: 414, label:"1991"},
			{ y: 460, label:"1992"},
			{ y: 450, label:"1993"},
			{ y: 500, label:"1994"},
			{ y: 480, label:"1995"},
			{ y: 480, label:"1996"},
			{ y: 500, label:"1997"},
			{ y: 480, label:"1998"},
			{ y: 510, label:"1999"}
		]
	}]
});
chart.render();
console.log("[DEBUG] Loading page... done!");
}
