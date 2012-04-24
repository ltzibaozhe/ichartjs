	Jidea.Interface = function(){
		var simple = function() {
			var M=0,V=0,MI,ML=0;
			for(var i=0;i<this.data.length;i++){
				Jidea.merge(this.data[i],this.fireEvent(this,'parseData',[this.data[i],i]));
				if(!this.data[i].color)
				this.data[i].color = Jidea.Math.get(i);
				V  = this.data[i].value;
				if(Jidea.isNumber(V)){
					V = Jidea.Math.parseFloat(V,this.type+':data['+i+']');
					this.data[i].value = V;
					this.total+=V;
					M = V>M?V:M;
					if(!MI)
						MI = V;
					MI = V<MI?V:MI;
				}else if(Jidea.isArray(V)){
					var T = 0;
					ML = V.length>ML?V.length:ML;
					for(var j=0;j<V.length;j++){
						T+=V[j];
						if(!MI)
						MI = V;
						M = V[j]>M?V[j]:M;
						MI = V[j]<MI?V[j]:MI;
					}
					this.data[i].total = T;
				}
			}
			
			if(Jidea.isArray(this.get('labels'))){
				ML = this.get('labels').length>ML?this.get('labels').length:ML;
			}
			
			this.push('maxItemSize',ML);
			this.push('minValue',MI);
			this.push('maxValue',M);
			this.push('total',this.total);
		},
		complex = function(){
			var M=0,MI=0,V;
			this.columnKeys = this.get('columnKeys');
			
			for(var i=0;i<this.data.length;i++){
				Jidea.Assert.equal(this.data[i].value.length,this.columnKeys.length,this.type+':data length and columnKeys not corresponding.');
				Jidea.merge(this.data[i],this.fireEvent(this,'parseData',[this.data[i],this.columnKeys,i]));
				Jidea.Assert.equal(this.data[i].value.length,this.columnKeys.length,this.type+':data length and columnKeys not corresponding.');
			}
			
			for(var i=0;i<this.columnKeys.length;i++){
				var item = [];
				for(var j=0;j<this.data.length;j++){
					V = this.data[j].value[i];
					this.data[j].value[i] = Jidea.Math.parseFloat(V,this.type+':data['+j+','+i+']');
					if(!this.data[j].color)
					this.data[j].color = Jidea.Math.get(j);
					//NEXT 此总数需考虑?
					this.total+=V;
					M = V>M?V:M;
					MI = V<MI?V:MI;
					
					item.push({
						name:this.data[j].name,
						value:this.data[j].value[i],
						color:this.data[j].color
					});
				}
				this.columns.push({
					name:this.columnKeys[i],
					item:item
				});
				
			}
			this.push('minValue',MI);
			this.push('maxValue',M);
			this.push('total',this.total);
		};
		return {
			_3D:function(){
				if(!Jidea.isDefined(this.get('xAngle_'))||!Jidea.isDefined(this.get('xAngle_'))){
					var P = Jidea.Math.vectorP2P(this.get('xAngle'),this.get('yAngle'));
					this.push('xAngle_',P.x);
					this.push('yAngle_',P.y);
				}
			},
			_2D:'2d',
			coordinate2d:function(){
				return new Jidea.Coordinate2D(Jidea.apply({
					kedu:{
						 position:this.get('keduAlign'),	
						 max_scale:this.get('maxValue'),
						 min_scale:this.get('minValue')
					}
				},this.get('coordinate')),this);
			},
			coordinate3d:function(){
				return new Jidea.Coordinate3D(Jidea.apply({
					kedu:{
						 position:this.get('keduAlign'),	
						 scaleAlign:this.get('keduAlign'),	
						 max_scale:this.get('maxValue'),
						 min_scale:this.get('minValue')
					}
				},this.get('coordinate')),this);
			},
			coordinate:function(){
				/**
				 * calculate  chart's measurement
				 */
				if(!this.get('coordinate.width'))
					this.push('coordinate.width',this.get('client_width')*0.8);
				
				if(!this.get('coordinate.height'))
					this.push('coordinate.height',this.get('client_height')*0.8);
				
				/**
				 * calculate chart's alignment
				 */
				if (this.get('align') == 'left') {
					this.push('originx',this.get('l_originx'));
				}else if (this.get('align') == 'right'){
					this.push('originx',this.get('r_originx')-this.get('coordinate.width'));
				}else{
					this.push('originx',this.get('centerx')-this.get('coordinate.width')/2);
				}
				
				this.push('originx',this.get('originx')+this.get('offsetx'));
				
				this.push('originy',this.get('centery')-this.get('coordinate.height')/2+this.get('offsety'));
				
				if(!this.get('coordinate.valid_width')||this.get('coordinate.valid_width')>this.get('coordinate.width')){
					this.push('coordinate.valid_width',this.get('coordinate.width'));
				}
				
				if(!this.get('coordinate.valid_height')||this.get('coordinate.valid_height')>this.get('coordinate.height')){
					this.push('coordinate.valid_height',this.get('coordinate.height'));
				}
				
				this.push('coordinate.originx',this.get('originx'));
				this.push('coordinate.originy',this.get('originy'));
				
				/**
				 * originx
				 */
				this.x = this.get('originx');
				/**
				 * 
				 * originy 
				 */
				this.y = this.get('originy');
				
			},
			parser:function() {
				this.data = this.get('data');
				if(this.dataType=='simple'){
					simple.call(this);
				}else if(this.dataType=='complex'){
					complex.call(this);
				}
			}
		}	
	}();
