iChart.Bar2D=iChart.extend(iChart.Bar,{configure:function(){iChart.Bar2D.superclass.configure.call(this);this.type="bar2d"},doConfig:function(){iChart.Bar2D.superclass.doConfig.call(this);var c=this.coo.getScale(this.get("scaleAlign")),e=this.coo.get("width"),f=this.get("barheight")/2,d=this.get("barheight")+this.get("barspace");this.data.each(function(a,b){this.doParse(a,b,b,0,this.y+this.get("barspace")+b*d,(a.value-c.start)*e/c.distance);a.reference=new iChart.Rectangle2D(this.get("rectangle"),this);this.rectangles.push(a.reference);this.labels.push(new iChart.Text({id:b,textAlign:"right",textBaseline:"middle",text:a.name,originx:this.x-this.get("text_space"),originy:this.y+this.get("barspace")+b*d+f},this))},this);this.pushComponent(this.labels);this.pushComponent(this.rectangles)}});