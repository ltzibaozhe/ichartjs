iChart.Rectangle2D=iChart.extend(iChart.Rectangle,{configure:function(){iChart.Rectangle2D.superclass.configure.apply(this,arguments);this.type="rectangle2d";this.set({shadow_offsety:-2});this.registerEvent()},drawValue:function(){""!=this.get("value")&&this.T.text(this.get("value"),this.get("value_x"),this.get("value_y"),!1,this.get("color"),this.get("textAlign"),this.get("textBaseline"),this.get("fontStyle"))},drawRectangle:function(){this.T.rectangle(this.get("originx"),this.get("originy"),this.get("width"),this.get("height"),this.get("fill_color"),this.get("border.enable"),this.get("border.width"),this.get("border.color"),this.get("shadow"),this.get("shadow_color"),this.get("shadow_blur"),this.get("shadow_offsetx"),this.get("shadow_offsety"))},isEventValid:function(a){return{valid:a.offsetX>this.x&&a.offsetX<this.x+this.width&&a.offsetY<this.y+this.height&&a.offsetY>this.y}},tipInvoke:function(){var a=this;return function(b,c){return{left:a.tipX(b,c),top:a.tipY(b,c)}}},doConfig:function(){iChart.Rectangle2D.superclass.doConfig.call(this);var a=this,b=a.get("tipAlign"),c=a.get("valueAlign");"left"==b||"right"==b?a.tipY=function(b,c){return a.centerY-c/2}:a.tipX=function(b){return a.centerX-b/2};"left"==b?a.tipX=function(b){return a.x-a.get("value_space")-b}:"right"==b?a.tipX=function(){return a.x+a.width+a.get("value_space")}:a.tipY="bottom"==b?function(){return a.y+a.height+3}:function(b,c){return a.y-c-3};"left"==c?(a.push("textAlign","right"),a.push("value_x",a.x-a.get("value_space")),a.push("value_y",a.centerY)):"right"==c?(a.push("textAlign","left"),a.push("textBaseline","middle"),a.push("value_x",a.x+a.width+a.get("value_space")),a.push("value_y",a.centerY)):"bottom"==c?(a.push("value_x",a.centerX),a.push("value_y",a.y+a.height+a.get("value_space")),a.push("textBaseline","top")):(a.push("value_x",a.centerX),a.push("value_y",a.y-a.get("value_space")),a.push("textBaseline","bottom"));a.valueX=a.get("value_x");a.valueY=a.get("value_y")}});