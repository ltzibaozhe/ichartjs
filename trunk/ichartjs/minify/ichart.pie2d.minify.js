iChart.Pie2D=iChart.extend(iChart.Pie,{configure:function(){iChart.Pie2D.superclass.configure.call(this);this.type="pie2d";this.dataType="simple";this.set({});this.registerEvent()},doConfig:function(){iChart.Pie2D.superclass.doConfig.call(this);this.sector_config.radius=this.get("radius");for(var c,b,d=this.get("label.enable"),e=this.get("tip.enable"),a=0;a<this.data.length;a++)c=this.data[a].name+(this.get("showpercent")?iChart.Math.toPercent(this.data[a].value/this.total,this.get("decimalsnum")):
""),d&&(b=this.fireEvent(this,"parseLabelText",[this.data[a],a]),this.sector_config.label.text=iChart.isString(b)?b:c),e&&(b=this.fireEvent(this,"parseTipText",[this.data[a],a]),this.sector_config.tip.text=iChart.isString(b)?b:c),this.sector_config.startAngle=this.data[a].startAngle,this.sector_config.middleAngle=this.data[a].middleAngle,this.sector_config.endAngle=this.data[a].endAngle,this.sector_config.background_color=this.data[a].color,this.sectors.push(new iChart.Sector2D(this.sector_config,
this));this.pushComponent(this.sectors)}});
