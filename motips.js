/**
 * motips.js
 *
 * a javascript tips plugin
 *
 * mouseover popup tips
 * base on jquery,with this js,popup a tips after every dom you want
 *
 * eg:
 * 	st1: import: <script src="motips"></script>
 * [st2: define: <script>$(function(){Motips.setOptions({xxx:xxx,xxx:xxx});});//DIY if necessary</script>]
 * 	st3: edit dom: <input type="xxx" motips="my tips" />
 * 	dang dang dang dang....
 * 	It works...
 *
 *  default val:
 *  	motipsClass : 'motips'
 *  	motipsWidth : '140px'
 * 		motipsLineHeight : '20px'
 * 		motipsFontSize : '12px'
 * 		motipsMarginDom : 5
 *
 * @author hellovigoss@gmail.com
 * @since 2010-03-15
 *
 * @tudo: ~just have a good visual in those browser supports css3
 *	  ~if this dom is near the right of the screen ..hehehe
 *	  ~separate the css out ..get the theme                            [fixed]
 *
 * @updates:
 * 2012-03-16 rewrite the style as a css obj;
 *            define a configure class for the plugin;
 *
 */
var Motips = {
	options: {
		motipsClass : 'motips',    //class you want
	 	motipsWidth : '140px',     //tips box width
	 	motipsLineHeight : '20px', //tips box line-height
	 	motipsFontSize : '12px',   //tips box font size
	 	motipsMarginDom : 5        //tips box margin to the dom
	},
	setOptions: function(options){
		for(var i in options){
			this.options[i] = options[i].toString();
		}
		this.reload();
	},
	load: function(){
		$("[motips]").mouseover(function(){
			var tips = $(this).attr('motips');
			if(tips == null || tips == ''){
				return false;
			}
			var left = $(this).offset().left;
			var top = $(this).offset().top;
			left = left + (Motips.options.motipsMarginDom*1) + $(this).outerWidth();
			var style = {position: 'absolute',
						top: top + 'px',
						left: left + 'px',
						display: 'block',
						width: Motips.options.motipsWidth,
						lineHeight: Motips.options.motipsLineHeight,
						fontSize: Motips.options.motipsFontSize,
						border: '#ccc 1px solid',
						padding: '2px 5px 2px 5px',
						background: '#fff',
						boxShadow: '0 0 10px #ccc',
						textShadow: 'none',
						borderRadius: '3px',
						zIndex: '1000'
						};
			$("<span />", {
				id : 'motips-box-only',
				text : tips,
				css : style,
				Class : Motips.options.motipsClass
				}).appendTo("body");
			}).mouseout(function(){
				$('#motips-box-only').remove();
			});
	},
	reload: function(){
		this.load();
	}
};
$(function(){
	Motips.load();
});
