	/**
	 * @overview this component use for abc
	 * @component#iChart.Text
	 * @extend#iChart.Component
	 */
	iChart.Text = iChart.extend(iChart.Component,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			iChart.Text.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'text';
			
			this.set({
				/**
				 * @cfg {String} Specifies the text want to disply.(default to '')
				 */
				text:'',
				/**
				 * @cfg {String} there has two layers of meaning,when width is 0,Specifies the textAlign of html5.else this is the alignment of box.(default to 'center')
				 * when width is 0,Available value are:
				 * @Option start
				 * @Option end
				 * @Option left
				 * @Option right
				 * @Option center
				 * when width is not 0,Available value are:
				 * @Option left
				 * @Option right
				 * @Option center
				 */
				textAlign:'center',
				/**
				 * @cfg {String} Here,specify as false to make background transparent.(default to null)
				 */
				background_color : 0,
				/**
				 * @cfg {String} Specifies the textBaseline of html5.(default to 'top')
				 * Available value are:
				 * @Option top
				 * @Option hanging
				 * @Option middle
				 * @Option alphabetic
				 * @Option ideographic
				 * @Option bottom
				 */
				textBaseline:'top',
				/**
				 * @cfg {Object} Here,specify as false by default
				 * @see <link>iChart.Element#border</link>
				 */
				border : {
					enable : false
				},
				/**
				 * @cfg {Number} Specifies the maxwidth of text in pixels,if given 0 will not be limited.(default to 0)
				 */
				width:0,
				/**
				 * @cfg {Number} Specifies the maxheight of text in pixels,if given 0 will not be limited(default to 0)
				 */
				height:0,
				/**
				 * @cfg {String} Specifies the writing-mode of text.(default to 'lr') .
				 * Available value are:
				 * @Option 'lr'
				 */
				writingmode : 'lr',
				/**
				 * @cfg {Number} Specifies the lineheight when text display multiline.(default to 16).
				 */
				line_height : 16
			});
			
			this.registerEvent();
			
		},
		doDraw:function(opts){
			if(this.get('box_feature'))
			this.T.box(this.x,this.y,this.get('width'),this.get('height'),this.get('border'),this.get('f_color'));
			if(this.get('text')!='')
			this.T.text(this.get('text'),this.get('textx'),this.get('texty'),this.get('width'),this.get('color'),this.get('textAlign'),this.get('textBaseline'),this.get('fontStyle'),0,0,this.get('shadow'));
		},
		isEventValid:function(){
			return {valid:false};
		},
		doLayout:function(x,y){
			var _ = this._();
			_.push('textx',_.get('textx')+x);
			_.push('texty',_.get('texty')+y);
		},
		doConfig:function(){
			iChart.Text.superclass.doConfig.call(this);
			var _ = this._(),x = _.x,y=_.y,w=_.get('width'),h=_.get('height'),a=_.get('textAlign');
			x+=(a=='center'?w/2:(a=='right'?w:0));
			if(h){
				y+=h/2;
				_.push('textBaseline','middle');
			}
			_.push('textx',x);
			_.push('texty',y);
			_.push('box_feature',w&&h);
			
			_.applyGradient();
			
		}
});//@end