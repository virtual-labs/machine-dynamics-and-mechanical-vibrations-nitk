<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-gb" lang="en-gb" >
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="NITK Surathkal,solve, Students,Online,Laboratory, Virtual,Experimentation ,SOLVE" />
  <meta name="description" content="Students Online Laboratory through Virtual Experimentation - SOLVE, NITK Surathkal" />
  <meta name="generator" content="Joomla! 1.5 - Open Source Content Management" />
  <title>Welcome to SOLVE  - The Virtual Lab @ NITK Surathkal</title>
  <link href="/index.php?format=feed&amp;type=rss" rel="alternate" type="application/rss+xml" title="RSS 2.0" />
  <link href="/index.php?format=feed&amp;type=atom" rel="alternate" type="application/atom+xml" title="Atom 1.0" />
  <link rel="stylesheet" href="http://solve.nitk.ac.in/modules/mod_superfishmenu/tmpl/css/superfish.css" type="text/css" />
  <link class="custom" href="images/favicon.png" rel="shortcut icon">
 <link href="css/default.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <!-- Instead add your custom styles to override the defaults 
  coming from the above style sheets. -->
    <link href="css/override.css" rel="stylesheet">
 <script type="text/javascript" src="js/modernizr-1.5.min.js" ></script>
<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>


<link rel="stylesheet" href="http://solve.nitk.ac.in/modules/mod_superfishmenu/tmpl/css/template.css" type="text/css" />
 

 <style type="text/css">


#pillmenu {
	height:50px;
	margin:0 auto;
	padding:0;
	width:1020px;
}

#pillmenu ul {
	line-height:normal;
	list-style:none outside none;
	margin:0;
	padding:0 0 0 15px;
width: 1010px;
}

#pillmenu li {
	background:url(images/img03.gif) no-repeat scroll right top transparent;
	float:left;
	height:50px;
}

#pillmenu li:hover {

}

#pillmenu li a#active_menu-nav {
	
}

#pillmenu li a {
	border:medium none;
	color:#FFFFFF;
	display:block;
	font-family:Arial,Helvetica,sans-serif;
	font-size:13px;
	margin-right:3px;
	margin-top:10px;
	padding:7px 20px;
	text-decoration:none;
}

#pillmenu li a:hover {
	text-decoration:underline;
}
  </style>
 <style type="text/css">
    
.sf-menu li:hover, .sf-menu li.sfHover,
.sf-menu a:focus, .sf-menu a:hover, .sf-menu a:active {
	background:none;
	
}

.sf-menu li:hover, .sf-menu li.sfHover, .sf-menu a:focus, .sf-menu a:hover, .sf-menu a:active {
background:none;
}
    
  </style>
  <script type="text/javascript" src="/plugins/system/mtupgrade/mootools.js"></script>
  <script type="text/javascript" src="/media/system/js/caption.js"></script>
  <script type="text/javascript" src="http://solve.nitk.ac.in/modules/mod_superfishmenu/tmpl/js/jquery.js"></script>
  <script type="text/javascript" src="http://solve.nitk.ac.in/modules/mod_superfishmenu/tmpl/js/jquery.event.hover.js"></script>
  <script type="text/javascript" src="http://solve.nitk.ac.in/modules/mod_superfishmenu/tmpl/js/supersubs.js"></script>
  <script type="text/javascript" src="http://solve.nitk.ac.in/modules/mod_superfishmenu/tmpl/js/superfish.js"></script>
  <script type="text/javascript">
jQuery.noConflict();
jQuery(function($){ $("ul.sf-menu").supersubs({minWidth:10, maxWidth:30, extraWidth:0}).superfish({hoverClass:'sfHover', pathClass:'active', pathLevels:0, delay:800, animation:{height:'show'}, speed:'def', autoArrows:0, dropShadows:0}) });
jQuery.event.special.hover.delay = 100;
jQuery.event.special.hover.speed = 100;

  </script>


    <script type="text/javascript">
$(document).ready(function() 
    {


    //the function is called once the document loads                

    $('#hidden-content').load('default.html #lab', function(response,status,xhr)
    {
      //loads the default.html #lab section into the
      //#hidden-content

      $('#container').load('content.html #lab', function(response,status,xhr)
      {
        //loads the content.html #lab section into the
    //#container
        
        homePage=$("div#lab-header-heading a").html();
        
    breadcrumb="<font color='white'>"+ "<a href='../index.html'>Virtual labs Home<a/> \> <a href='index.html'>" + homePage + "<\/a>"+ "<\/font>";
      
    $("article#lab-article").prepend("<div id='lab-article-breadcrumb' class='breadcrumb'>"+ breadcrumb + "<\/div>");
        // $("article#lab-article div#lab-article-breadcrumb").html(breadcrumb);                  
        $("#container .default").each(function()
        {
      //checks for all the sections in the #container
      //that is the content.html with class default

          sectionId = $(this).attr('id');
          sectionContent = $("#hidden-content #" + sectionId).html();
          $("#container #" + sectionId).html(sectionContent);                      
    });

        $("#container #lab-article-sections > section").each(function() 
        {
      // loads all the content in the respective
      // sections with the corresponding section headings 
      
      sectionId = $(this).attr('id');
          headerId = $("#" + sectionId + "-heading").html();
          iconId = $("#" + sectionId + "-icon").html();
                                        
          $("#container #lab-article-navigation ul").append(
                "<li> <a href=\'#\' id=\'"+ sectionId + 
                "-menu\'>" + iconId +"<br />" + headerId + 
                "<\/a> <\/li>");
        });
      
    /*                          
        $("#lab-article-sections").after("<div id='lab-article-sections-view'> <\/div>");
        $("#lab-article-sections-view").html($("#lab-article-sections section:first").html());*/
      
    $("#lab-article-sections section").hide(); 
    //hide all the experiment sections

    $("#lab-article-sections section:first").show();
    //show only the first experiment section when the
    //experiment page loads
        
    $("#lab-article-navigation ul > li a").live('click', function() 
        { 
          //enables the navigation
      
          menuId = $(this).attr('id'); // this points to the current element
          sectionId = menuId.replace(/-menu/i, "");
          $("#lab-article-sections section").hide();
      $("#lab-article-sections #" + sectionId).show();
          /*$("#lab-article-sections-view").html($("#lab-article-sections #" + sectionId).html());*/
        });
      });       
    });
    

});
    </script>


<link rel="stylesheet" href="/templates/system/css/system.css" type="text/css" />
<link rel="stylesheet" href="/templates/solvenitk_01/css/template.css" type="text/css" />

<!--[if lte IE 6]>
<link rel="stylesheet" href="/templates/solvenitk_01/css/ie6.css" type="text/css" />
<![endif]-->



</head>
<body> <img style="padding-left: 170px; width: 1020px; height:100px;" src="images/logo.png">
	<div id="wrapper">
		<div id="header">
			<!-- <div id="logo">
					<h1><a href="#"><strong>SOLVE</strong><span>&nbsp; The Virtual Lab @ NITK Surathkal</span> <br /><span><b>S</b>tudents &nbsp; <b>O</b>nline &nbsp; <b>L</b>aboratory &nbsp; through &nbsp; <b>V</b>irtual &nbsp; <b>E</b>xperimentations</span></a></h1>
			</div>-->
		</div>
	<!-- end #header -->
	<!-- Pillmenu -->
		<div id="pillmenu">
				<table cellspacing="0" cellpadding="0" style="float: left;">
					<tr>
						<td>
							<ul class="menu sf-menu sf-horizontal"><li id="current" class="first-child active item1"><a href="http://solve.nitk.ac.in/"><span>Home</span></a></li><li class="parent item65"><a href="/index.php?option=com_content&amp;view=article&amp;id=153&amp;Itemid=65"><span>Virtual Lab</span></a><ul><li class="parent item79"><a href="/index.php?option=com_content&amp;view=section&amp;id=16&amp;Itemid=79"><span>Chemical</span></a><ul><li class="last-child first-child item98"><a href="/index.php?option=com_content&amp;view=category&amp;id=61&amp;Itemid=98"><span>Unit Operation,Reaction Engg. &amp; Process Control</span></a></li></ul></li><li class="parent item77"><a href="/index.php?option=com_content&amp;view=section&amp;id=14&amp;Itemid=77"><span>Civil</span></a><ul><li class="first-child item95"><a href="/index.php?option=com_content&amp;view=category&amp;id=60&amp;Itemid=95"><span>Fluid Mechanics</span></a></li><li class="last-child item80"><a href="/index.php?option=com_content&amp;view=category&amp;id=38&amp;Itemid=80"><span>Strength of Materials</span></a></li></ul></li><li class="parent item101"><a href="/index.php?option=com_content&amp;view=section&amp;id=15&amp;Itemid=101"><span>Electrical</span></a><ul><li class="first-child item102"><a href="/index.php?option=com_content&amp;view=category&amp;id=44&amp;Itemid=102"><span>Substation Automation</span></a></li><li class="last-child item103"><a href="/index.php?option=com_content&amp;view=category&amp;id=63&amp;Itemid=103"><span>Industrial Electric Drives</span></a></li></ul></li><li class="parent item93"><a href="/index.php?option=com_content&amp;view=article&amp;id=151&amp;Itemid=93"><span>Mechanical</span></a><ul><li class="first-child item96"><a href="/index.php?option=com_content&amp;view=article&amp;id=149&amp;Itemid=96"><span>Machine Dynamics &amp; Mechanical Vibrations</span></a></li><li class="last-child item97"><a href="/index.php?option=com_content&amp;view=article&amp;id=150&amp;Itemid=97"><span>Mechanics of Machine</span></a></li></ul></li></ul></li><li class="item63"><a href="/index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=39&amp;Itemid=63"><span>Video Tutorials</span></a></li><li class="item54"><a href="/index.php?option=com_kunena&amp;view=entrypage&amp;Itemid=54"><span>Forum</span></a></li><li class="item58"><a href="/index.php?option=com_docman&amp;Itemid=58"><span>Downloads</span></a></li>

&nbsp;&nbsp;&nbsp;&nbsp;
<li class="item59"><form action="http://solve.nitk.ac.in/" id="cse-search-box">
		<div>
		<input type="text" name="q" size="15" />
		<input class="srchButton" type="submit" name="sa" value="Search" />
		</div>
		</form></li>


		</ul>

						</td>
					</tr>
				</table>
		</div>
	<!-- /Pillmenu -->
	<!-- Wrapper -->
	
	
	</div>
		<!-- /Wrapper -->




 <div id="container"></div>
    <div id="hidden-content"></div>
</body>
</html>
