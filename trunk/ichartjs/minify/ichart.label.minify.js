iChart.Label=iChart.extend(iChart.Component,{configure:function(){iChart.Label.superclass.configure.apply(this,arguments);this.type="legend";this.set({text:"",line_height:16,line_thickness:1,sign:"square",sign_size:12,padding:5,offsety:2,sign_space:5,background_color:"#efefef",text_with_sign_color:!1,border:{radius:2}});this.atomic=!0;this.registerEvent()},isEventValid:function(a){return{valid:iChart.inRange(this.labelx,this.labelx+this.get("width"),a.offsetX)&&iChart.inRange(this.labely,this.labely+this.get("height"),a.offsetY)}},text:function(a){a&&this.push("text",a);this.push("width",this.T.measureText(this.get("text"))+this.get("hpadding")+this.get("sign_size")+this.get("sign_space"))},localizer:function(){var a=this.get("quadrantd");this.labelx=2<=a&&3>=a?this.get("labelx")-this.get("width"):this.get("labelx");this.labely=3<=a?this.get("labely")-this.get("height"):this.get("labely")},doDraw:function(){this.localizer();var a=this.get("line_potins"),b=this.get("sign_size"),c=this.labelx+this.get("padding_left"),d=this.labely+this.get("padding_top");this.T.lines(a,this.get("line_thickness"),this.get("border.color"),this.get("line_globalComposite"));this.T.box(this.labelx,this.labely,this.get("width"),this.get("height"),this.get("border.width"),this.get("border.color"),this.get("border.radius"),this.get("background_color"),!1,this.get("shadow"),this.get("shadow_color"),this.get("shadow_blur"),this.get("shadow_offsetx"),this.get("shadow_offsety"));this.T.textStyle("left","top",this.get("fontStyle"));a=this.get("color");this.get("text_with_sign_color")&&(a=this.get("scolor"));"square"==this.get("sign")?this.T.rectangle(c,d,b,b,this.get("scolor"),1):this.T.round(c+b/2,d+b/2,b/2,this.get("scolor"),1);this.T.fillText(this.get("text"),c+b+this.get("sign_space"),d,this.get("textwidth"),a)},doConfig:function(){iChart.Label.superclass.doConfig.call(this);this.T.textFont(iChart.getFont(this.get("fontweight"),this.get("fontsize"),this.get("font")));this.push("height",this.get("line_height")+this.get("vpadding"));this.text();this.localizer()}});