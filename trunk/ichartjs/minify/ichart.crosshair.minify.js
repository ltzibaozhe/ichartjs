iChart.CrossHair=iChart.extend(iChart.Html,{configure:function(){iChart.CrossHair.superclass.configure.apply(this,arguments);this.type="crosshair";this.set({text:"",top:0,left:0,hcross:!0,vcross:!0,invokeOffset:null,line_width:1,line_color:"green",shadow_color:"#dedede",delay:200})},follow:function(b,c){if(this.get("invokeOffset")){var a=this.get("invokeOffset")(b,c);a&&a.hit&&(this.horizontal.style.top=a.top-this.top+"px",this.vertical.style.left=a.left-this.left+"px")}else this.horizontal.style.top=
b.offsetY-this.top-1+"px",this.vertical.style.left=b.offsetX-this.left-1+"px"},beforeshow:function(b,c){this.follow(b,c)},initialize:function(){iChart.CrossHair.superclass.initialize.call(this);this.top=iChart.Math.fixPixel(this.get("top"));this.left=iChart.Math.fixPixel(this.get("left"));this.dom=document.createElement("div");this.dom.style.zIndex=this.get("index");this.dom.style.position="absolute";this.dom.style.width=iChart.Math.toPixel(0);this.dom.style.height=iChart.Math.toPixel(0);this.dom.style.top=
iChart.Math.toPixel(this.get("top"));this.dom.style.left=iChart.Math.toPixel(this.get("left"));this.css("visibility","hidden");this.horizontal=document.createElement("div");this.vertical=document.createElement("div");this.horizontal.style.width=iChart.Math.toPixel(this.get("width"));this.horizontal.style.height=iChart.Math.toPixel(this.get("line_width"));this.horizontal.style.backgroundColor=this.get("line_color");this.horizontal.style.position="absolute";this.vertical.style.width=iChart.Math.toPixel(this.get("line_width"));
this.vertical.style.height=iChart.Math.toPixel(this.get("height"));this.vertical.style.backgroundColor=this.get("line_color");this.vertical.style.position="absolute";this.dom.appendChild(this.horizontal);this.dom.appendChild(this.vertical);this.get("shadow")&&(this.dom.style.boxShadow=this.get("shadowStyle"));this.wrap.appendChild(this.dom);var b=this;this.target.on("mouseover",function(c,a){b.show(c,a)}).on("mouseout",function(c,a){b.hidden(c,a)}).on("mousemove",function(c,a){b.follow(c,a)})}});
