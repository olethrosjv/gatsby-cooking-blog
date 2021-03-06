import React from "react"
import "./layout.css"
import { Link } from "gatsby"


const Nav = () => (
<nav className="dropdownmenu">
    <ul>
      <li><Link to="/page-2/">Go to page 2</Link></li>
     <li><Link to="/about/">About Us</Link></li>
      <li><Link to="/awesome/">Awesome</Link></li>
      <li><Link to="/another/">Another</Link></li>
    </ul>
</nav>
)

export default Nav

/*

Styling from CodePen. You will need to change colors to fit with site

.dropdownmenu ul, .dropdownmenu li {
	margin: 0;
	padding: 0;
}
.dropdownmenu ul {
	background: gray;
	list-style: none;
	width: 100%;
}
.dropdownmenu li {
	float: left;
	position: relative;
	width:auto;
}
.dropdownmenu a {
	background: #30A6E6;
	color: #FFFFFF;
	display: block;
	font: bold 12px/20px sans-serif;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	-webkit-transition: all .25s ease;
	-moz-transition: all .25s ease;
	-ms-transition: all .25s ease;
	-o-transition: all .25s ease;
	transition: all .25s ease;
}
.dropdownmenu li:hover a {
	background: #000000;
}
------------ Not yet currently part of component style---------------

#submenu {
	left: 0;
	opacity: 0;
	position: absolute;
	top: 35px;
	visibility: hidden;
	z-index: 1;
}
li:hover ul#submenu {
	opacity: 1;
	top: 40px;	//adjust this as per top nav padding top & bottom comes 
	visibility: visible;
}
#submenu li {
	float: none;
	width: 100%;
}
#submenu a:hover {
	background: #DF4B05;
}
#submenu a {
	background-color:#000000;
}*/