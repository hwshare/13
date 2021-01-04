//改变阅读背景、字体大小和颜色的javascript
var ReadSet = {
	bgcolor : ["#f9fbdd","#e9faff","#e6fae4","#ebeaea","#d8d7d7"],
	bgcname : ["明黄", "淡蓝", "护眼","淡灰","深灰"],
	bgcvalue : "#e9faff",
	
	fontcolor : ["#666666","#666666","#666666","#333333","#111111"],
	fontcname : ["1", "2", "3","4","5"],
	fontcvalue : "#666666",
	
	fontsize : ["18px", "22px",  "26px"],
	fontsname : ["A-", "A", "A+"],
	fontsvalue : "22px",
	
	pageid : "apage",
	textid : "rtext",
	SetBgcolor : function(bcolor){
		if(document.getElementById(this.pageid)) document.getElementById(this.pageid).style.backgroundColor = bcolor;
		if(this.bgcvalue != bcolor) this.SetCookies("bgcolor",bcolor);
		this.bgcvalue = bcolor;
	},
	SetFontcolor : function(fcolor){
		if(document.getElementById(this.textid)) document.getElementById(this.textid).style.color = fcolor;
		if(this.fontcvalue != fcolor) this.SetCookies("fontcolor",fcolor);
		this.fontcvalue = fcolor;
	},
	SetFontsize : function(size){
		if(document.getElementById(this.textid)) document.getElementById(this.textid).style.fontSize = size;
		if(this.fontsvalue != size) this.SetCookies("fontsize",size);
		this.fontsvalue = size;
	},
	Show : function(){
		var output;
		output = '<div class="readSet">';
		//output += '<span class="rc">背景：</span>';
		for(i=0; i<this.bgcolor.length; i++){
			output += '<a style="background-color: '+this.bgcolor[i]+'" class="ra" title="'+this.bgcname[i]+'" onclick="ReadSet.SetBgcolor(\''+this.bgcolor[i]+'\');ReadSet.SetFontcolor(\''+this.fontcolor[i]+'\')" href="javascript:;"></a>';
		}

		//output += '<span class="rc">字体：</span>';
		output += '<span class="rf">';
		for(i=0; i<this.fontsize.length; i++){
			output += '<a class="rt" onclick="ReadSet.SetFontsize(\''+this.fontsize[i]+'\')" href="javascript:;" style="font-size:'+this.fontsize[i]+'">'+this.fontsname[i]+'</a>';
		}
		output += '</span>';
		output += '<div style="font-size:0px;clear:both;"></div></div>';
		document.write(output);
	},
	SetCookies : function(cookieName,cookieValue, expirehours){
		var today = new Date();
		var expire = new Date();
		expire.setTime(today.getTime() + 3600000 * 356 * 24);
		document.cookie = cookieName+'='+escape(cookieValue)+ ';expires='+expire.toGMTString()+'; path=/';
	},
	ReadCookies : function(cookieName){
		var theCookie = ''+document.cookie;
		var ind = theCookie.indexOf(cookieName);
		if (ind == -1 || cookieName === '') return ''; 
		var ind1 = theCookie.indexOf(';',ind);
		if (ind1 == -1) ind1=theCookie.length;
		return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
	},
	SaveSet : function(){
		this.SetCookies("bgcolor",this.bgcvalue);
		this.SetCookies("fontcolor",this.fontcvalue);
		this.SetCookies("fontsize",this.fontsvalue);
	},
	LoadSet : function(){
		tmpstr = this.ReadCookies("bgcolor");
		if(tmpstr !== "") this.bgcvalue = tmpstr;
		this.SetBgcolor(this.bgcvalue);
		tmpstr = this.ReadCookies("fontcolor");
		if(tmpstr !== "") this.fontcvalue = tmpstr;
		this.SetFontcolor(this.fontcvalue);
		tmpstr = this.ReadCookies("fontsize");
		if(tmpstr !== "") this.fontsvalue = tmpstr;
		this.SetFontsize(this.fontsvalue);
	}
}
function LoadReadSet(){
	ReadSet.LoadSet();
}
if (window.attachEvent){
	window.attachEvent('onload',LoadReadSet);
}else{
	window.addEventListener('load',LoadReadSet,false);
}
