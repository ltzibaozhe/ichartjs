	/**
	 * @overview this component use for abc
	 * @component#@chart#iChart.Pie2D
	 * @extend#iChart.Pie
	 */
	iChart.Pie2D = iChart.extend(iChart.Pie,{
		/**
		 * initialize the context for the pie2d
		 */
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			iChart.Pie2D.superclass.configure.call(this);
			
			this.type = 'pie2d';
			
			this.dataType = 'simple';
			
			this.set({});
			
			this.registerEvent();
		},
		doConfig:function(){
			iChart.Pie2D.superclass.doConfig.call(this);
			
			this.sector_config.radius = this.get('radius');
			
			
			var t,lt,tt,Le = this.get('label.enable'),Te = this.get('tip.enable');
			for(var i=0;i<this.data.length;i++){
				
				t = this.data[i].name+(this.get('showpercent')?iChart.toPercent(this.data[i].value/this.total,this.get('decimalsnum')):'');
				
				if(Le){
					lt = this.fireEvent(this,'parseLabelText',[this.data[i],i]);
					this.sector_config.label.text = iChart.isString(lt)?lt:t;
				}
				if(Te){
					tt = this.fireEvent(this,'parseTipText',[this.data[i],i]);
					this.sector_config.tip.text = iChart.isString(tt)?tt:t;
				}
				this.sector_config.startAngle = this.data[i].startAngle;
				this.sector_config.middleAngle = this.data[i].middleAngle;
				this.sector_config.endAngle = this.data[i].endAngle;
				this.sector_config.background_color = this.data[i].color;
				
				this.sectors.push(new iChart.Sector2D(this.sector_config,this));
			}
			this.pushComponent(this.sectors);
		}
});