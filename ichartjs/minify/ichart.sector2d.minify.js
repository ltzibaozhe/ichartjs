iChart.Sector2D=iChart.extend(iChart.Sector,{configure:function(){iChart.Sector2D.superclass.configure.apply(this,arguments);this.type="sector2d";this.set({radius:0})},drawSector:function(){this.T.sector(this.x,this.y,this.r,this.get("startAngle"),this.get("endAngle"),this.get("fill_color"),this.get("border.enable"),this.get("border.width"),this.get("border.color"),this.get("shadow"),this.get("shadow_color"),this.get("shadow_blur"),this.get("shadow_offsetx"),this.get("shadow_offsety"),this.get("counterclockwise"))},isEventValid:function(a){return this.label&&this.label.isEventValid(a).valid?{valid:!0}:this.r<iChart.distanceP2P(this.x,this.y,a.offsetX,a.offsetY)?{valid:!1}:iChart.angleInRange(this.get("startAngle"),this.get("endAngle"),2*Math.PI-iChart.atan2Radian(this.x,this.y,a.offsetX,a.offsetY))?{valid:!0}:{valid:!1}},tipInvoke:function(){var a=this;return function(e,d){var b=iChart.p2Point(a.x,a.y,a.get("middleAngle"),0.8*a.r),c=iChart.quadrantd(a.get("middleAngle"));return{left:2<=c&&3>=c?b.x-e:b.x,top:3<=c?b.y-d:b.y}}},labelInvoke:function(a,e){var d=this.get("middleAngle"),b=iChart.p2Point(a,e,d,this.r+this.get("label.linelength")),c=iChart.p2Point(a,e,d,this.r/2),f=iChart.quadrantd(d);return{origin:{x:c.x,y:c.y},lineFn:function(){this.T.line(c.x,c.y,b.x,b.y,this.get("border.width"),this.get("border.color"))},labelXY:function(){return{labelx:2<=f&&3>=f?b.x-this.width:b.x,labely:3<=f?b.y-this.height:b.y}}}},doConfig:function(){iChart.Sector2D.superclass.doConfig.call(this);this.r=this.get("radius");iChart.Assert.gtZero(this.r);this.get("gradient")&&this.push("fill_color",this.T.avgRadialGradient(this.x,this.y,0,this.x,this.y,this.r,[this.get("light_color"),this.get("dark_color")]));this.pushIf("increment",iChart.lowTo(5,this.r/8));this.get("label.enable")&&(this.pushIf("label.linelength",iChart.lowTo(10,this.r/8)),this.label=new iChart.Label(this.get("label"),this))}});