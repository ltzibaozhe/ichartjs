iChart.Line=iChart.extend(iChart.Chart,{configure:function(){iChart.Line.superclass.configure.call(this);this.type="line";this.dataType="simple";this.set({coordinate:{},scaleAlign:"left",labelAlign:"bottom",labels:[],label_space:6,smooth:!1,proportional_spacing:!0,label_spacing:0,segment_style:{},legend:{sign:"round-bar",sign_size:14}});this.registerEvent("parsePoint");this.lines=[]},doConfig:function(){iChart.Line.superclass.doConfig.call(this);iChart.Interface.coordinate.call(this);this.push("line_start",(this.get("coordinate.width")-this.get("coordinate.valid_width"))/2);this.push("line_end",this.get("coordinate.width")-this.get("line_start"));this.get("proportional_spacing")&&this.push("label_spacing",this.get("coordinate.valid_width")/(this.get("maxItemSize")-1));this.push("segment_style.originx",this.get("originx")+this.get("line_start"));this.push("segment_style.originy",this.get("originy")+this.get("coordinate.height"));this.push("segment_style.width",this.get("coordinate.valid_width"));this.push("segment_style.height",this.get("coordinate.valid_height"));this.push("segment_style.limit_y",1<this.data.length);this.push("segment_style.keep_with_coordinate",1==this.data.length);var b=1==this.data.length,c=this;this.get("coordinate.crosshair.enable")&&(this.push("coordinate.crosshair.hcross",b),this.push("coordinate.crosshair.invokeOffset",function(a){a=c.lines[0].isEventValid(a);return a.valid?a:!1}));iChart.apply(this.get("segment_style"),iChart.clone("shadow,shadow_blur,shadow_offsetx,shadow_offsety,gradient,color_factor,tip".split(","),this.options))}});