iChart.Interface=function(){return{_3D:function(){if(!iChart.isDefined(this.get("xAngle_"))||!iChart.isDefined(this.get("xAngle_"))){var d=iChart.vectorP2P(this.get("xAngle"),this.get("yAngle"));this.push("xAngle_",d.x);this.push("yAngle_",d.y)}},_2D:"2d",coordinate2d:function(){return new iChart.Coordinate2D(iChart.apply({kedu:{position:this.get("keduAlign"),max_scale:this.get("maxValue"),min_scale:this.get("minValue")}},this.get("coordinate")),this)},coordinate3d:function(){return new iChart.Coordinate3D(iChart.apply({kedu:{position:this.get("keduAlign"),
scaleAlign:this.get("keduAlign"),max_scale:this.get("maxValue"),min_scale:this.get("minValue")}},this.get("coordinate")),this)},coordinate:function(){this.pushIf("coordinate.width",0.8*this.get("client_width"));this.pushIf("coordinate.height",0.8*this.get("client_height"));"left"==this.get("align")?this.push("originx",this.get("l_originx")):"right"==this.get("align")?this.push("originx",this.get("r_originx")-this.get("coordinate.width")):this.push("originx",this.get("centerx")-this.get("coordinate.width")/
2);this.push("originx",this.get("originx")+this.get("offsetx"));this.push("originy",this.get("centery")-this.get("coordinate.height")/2+this.get("offsety"));(!this.get("coordinate.valid_width")||this.get("coordinate.valid_width")>this.get("coordinate.width"))&&this.push("coordinate.valid_width",this.get("coordinate.width"));(!this.get("coordinate.valid_height")||this.get("coordinate.valid_height")>this.get("coordinate.height"))&&this.push("coordinate.valid_height",this.get("coordinate.height"));this.x=
this.get("originx");this.y=this.get("originy");this.push("coordinate.originx",this.x);this.push("coordinate.originy",this.y)},parser:function(){this.data=this.get("data");if("simple"==this.dataType){for(var d=0,a=0,c,b=0,e=0;e<this.data.length;e++)if(iChart.merge(this.data[e],this.fireEvent(this,"parseData",[this.data[e],e])),this.data[e].color||(this.data[e].color=iChart.get(e)),a=this.data[e].value,iChart.isNumber(a))a=iChart.parseFloat(a,this.type+":data["+e+"]"),this.data[e].value=a,this.total+=
a,d=a>d?a:d,c||(c=a),c=a<c?a:c;else if(iChart.isArray(a)){for(var f=0,b=a.length>b?a.length:b,g=0;g<a.length;g++)f+=a[g],c||(c=a),d=a[g]>d?a[g]:d,c=a[g]<c?a[g]:c;this.data[e].total=f}iChart.isArray(this.get("labels"))&&(b=this.get("labels").length>b?this.get("labels").length:b);this.push("maxItemSize",b);this.push("minValue",c);this.push("maxValue",d);this.push("total",this.total)}else if("complex"==this.dataType){a=d=0;this.columnKeys=this.get("columnKeys");for(b=0;b<this.data.length;b++)iChart.Assert.equal(this.data[b].value.length,
this.columnKeys.length,this.type+":data length and columnKeys not corresponding."),iChart.merge(this.data[b],this.fireEvent(this,"parseData",[this.data[b],this.columnKeys,b])),iChart.Assert.equal(this.data[b].value.length,this.columnKeys.length,this.type+":data length and columnKeys not corresponding.");for(b=0;b<this.columnKeys.length;b++){e=[];for(f=0;f<this.data.length;f++)c=this.data[f].value[b],this.data[f].value[b]=iChart.parseFloat(c,this.type+":data["+f+","+b+"]"),this.data[f].color||(this.data[f].color=
iChart.get(f)),this.total+=c,d=c>d?c:d,a=c<a?c:a,e.push({name:this.data[f].name,value:this.data[f].value[b],color:this.data[f].color});this.columns.push({name:this.columnKeys[b],item:e})}this.push("minValue",a);this.push("maxValue",d);this.push("total",this.total)}}}}();