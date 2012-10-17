iChart.Legend=iChart.extend(iChart.Component,{configure:function(){iChart.Legend.superclass.configure.apply(this,arguments);this.type="legend";this.set({data:void 0,width:"auto",column:1,row:"max",maxwidth:0,line_height:16,sign:"square",sign_size:12,sign_space:5,legend_space:5,z_index:1009,text_with_sign_color:!1,align:"right",valign:"middle"});this.atomic=!0;this.registerEvent("parse","drawRaw","drawCell")},isEventValid:function(a){var b={valid:!1},d=this._();a.x>this.x&&a.x<d.x+d.width&&a.y>d.y&&a.y<d.y+d.height&&d.data.each(function(c,f){a.x>c.x&&a.x<c.x+c.width_+d.get("signwidth")&&a.y>c.y&&a.y<c.y+d.get("line_height")&&(b={valid:!0,index:f,target:c})},d);return b},drawCell:function(a,b,d,c,f){var e=this.get("sign_size"),g=this.getPlugin("sign");if(!g||!g.call(this,this.T,f,a+e/2,b+e/2,e,c))"round"==f?this.T.round(a+e/2,b+e/2,e/2,c):"round-bar"==f?(this.T.box(a,b+5*e/12,e,e/6,0,c),this.T.round(a+e/2,b+e/2,e/4,c)):"square-bar"==f?(this.T.box(a,b+5*e/12,e,e/6,0,c),this.T.box(a+e/4,b+e/4,e/2,e/2,0,c)):this.T.box(a,b,e,e,0,c);f=this.get("color");this.get("text_with_sign_color")&&(f=c);this.T.fillText(d,a+this.get("signwidth"),b+e/2,this.get("textwidth"),f)},drawRow:function(a,b,d){for(var c,f=0;f<this.get("column");f++)c=this.data[a],a<this.data.length&&(this.fireEvent(this,"drawCell",[this,c]),this.drawCell(b,d,c.text,c.color,c.sign||this.get("sign")),c.x=b,c.y=d),b+=this.columnwidth[f]+this.get("signwidth")+this.get("legend_space"),a++},doDraw:function(){this.push("border.radius",5);this.T.box(this.x,this.y,this.width,this.height,this.get("border"),this.get("f_color"),!1,this.get("shadow"));this.T.textStyle("left","middle",iChart.getFont(this.get("fontweight"),this.get("fontsize"),this.get("font")));for(var a=this.x+this.get("padding_left"),b=this.y+this.get("padding_top"),d=this.get("column"),c=this.get("row"),f=0;f<c;f++)this.drawRow(f*d,a,b),b+=this.get("line_height"),this.fireEvent(this,"drawRaw",[this,f*d])},doConfig:function(){iChart.Legend.superclass.doConfig.call(this);var a=this._(),b=a.get("sign_size"),d=a.container;a.T.textFont(a.get("fontStyle"));a.push("signwidth",b+a.get("sign_space"));a.get("line_height")<b&&a.push("line_height",b+b/5);"center"==a.get("align")&&"middle"==a.get("valign")&&a.push("valign","top");"left"==d.get("align")&&"middle"==a.get("valign")&&a.push("align","right");var b=0,c=w=a.get("width"),f=0,e="auto"==w,g=iChart.isNumber(a.get("column")),h=iChart.isNumber(a.get("row")),i=a.data.length;!g&&!h&&(g=1);g&&!h&&a.push("row",Math.ceil(i/a.get("column")));!g&&h&&a.push("column",Math.ceil(i/a.get("row")));g=a.get("column");h=a.get("row");i>h*g&&(h+=Math.ceil((i-h*g)/g),a.push("row",h));a.columnwidth=Array(g);e&&(c=0);a.data.each(function(b,c){iChart.merge(b,a.fireEvent(a,"parse",[a,b.name,c]));b.text=b.text||b.name;b.width_=a.T.measureText(b.text)},a);for(var j=0;j<g;j++){f=0;for(b=j;b<i;)f=Math.max(f,a.data[b].width_),b+=g;a.columnwidth[j]=f;c+=f}e&&(w=a.push("width",c+a.get("hpadding")+a.get("signwidth")*g+(g-1)*a.get("legend_space")));w>a.get("maxwidth")&&(w=a.push("width",a.get("maxwidth")));a.push("textwidth",w-a.get("hpadding")-a.get("signwidth"));a.width=w;a.height=b=a.push("height",h*a.get("line_height")+a.get("vpadding"));a.y="top"==a.get("valign")?d.get("t_originy"):"bottom"==a.get("valign")?d.get("b_originy")-b:d.get("centery")-b/2;a.x="left"==a.get("align")?d.get("l_originx"):"center"==a.get("align")?d.get("centerx")-a.get("textwidth")/2:d.get("r_originx")-w;a.x=a.push("originx",a.x+a.get("offsetx"));a.y=a.push("originy",a.y+a.get("offsety"))}});