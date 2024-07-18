
; /* Start:"a:4:{s:4:"full";s:94:"/bitrix/templates/.default/components/bitrix/menu/vertical_multilevel2/script.js?1268915882507";s:6:"source";s:80:"/bitrix/templates/.default/components/bitrix/menu/vertical_multilevel2/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var jsvhover = function()
{
	var menuDiv = document.getElementById("vertical-multilevel-menu");
	if (!menuDiv)
		return;

  var nodes = menuDiv.getElementsByTagName("li");
  for (var i=0; i<nodes.length; i++) 
  {
    nodes[i].onmouseover = function()
    {
      this.className += " jsvhover";
    }
    
    nodes[i].onmouseout = function()
    {
      this.className = this.className.replace(new RegExp(" jsvhover\\b"), "");
    }
  }
}

if (window.attachEvent) 
	window.attachEvent("onload", jsvhover); 
/* End */
;; /* /bitrix/templates/.default/components/bitrix/menu/vertical_multilevel2/script.js?1268915882507*/
