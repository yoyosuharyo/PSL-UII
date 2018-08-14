window.onscroll = function() {myFunction()};
var header = document.getElementById(&quot;menu-navigation&quot;);
var sticky = header.offsetTop;
function myFunction() {if (window.pageYOffset &gt; sticky) {header.classList.add(&quot;sticky&quot;);} else {header.classList.remove(&quot;sticky&quot;);}}
