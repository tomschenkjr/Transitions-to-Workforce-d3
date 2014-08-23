Introduction
============
This is the source code used to create the principal diagram displayed in ["Measuring Transitions into the Workforce as a Form of Accountability"]. 
The objective of this project is to create an interative web page showing the relationships between community college major and employment. The design is based on a [static poster] created using [Circos] as the primary image. The left side of the diagram represents the various community college majors aggregated by the career clusters. The right side of the diagram represents the two-digit NAICS codes. ["Measuring Transitions into the Workforce as a Form of Accountability"] explains the methodology behind the approach. The main diagram was created using [d3.js] [chord diagram]. You can view the current demo in my [sandbox].

Live Version
============
The current version of the diagram is viewable at http://tomschenkjr.net/workforcetransitions/

Requirements
============

You will need a web browser with an internet connection to view the output. The browser needs to fully support the Scalable Vector Graphic (SVG) format, including Safari, Chrome, and Firefox. Unfortunately, Internet Explorer (including version 9) is not supported. You do not need to download d3.js library, but do need an internet connection to generate the image.

Files
=====

visualizing-transitions.html
----------------------------
The primary file which is displayed in the browser. This file contains three SVG images. The script which generates the center image is *not* included in this file, instead, see chord.js. The spacing in the center is created through dozens of white "<div>" markers.
 
chord.js
--------
This file contains the code which generates the center image.

style.css
---------
The stylesheet for visualizing-transitions.html and chord.js (formats the diagram's labels).

getuser.php
-----------
A PHP script that queries a MySQL table to retrieve information about a particular major. The PHP script is called by a dropdown menu in HTML document.


Contact
=======
You can contact the original author on the GitHub, at tomschenkjr@gmail.com, or on Twitter @tomschenkjr.

[d3.js]: http://d3js.org/
[chord diagram]: http://mbostock.github.com/d3/ex/chord.html
[sandbox]: http://tomschenkjr.net/sandbox/visualizing-transitions.html
["Measuring Transitions into the Workforce as a Form of Accountability"]: https://www.airweb.org/EducationAndEvents/Publications/ProfessionalFiles/Documents/irapps32.pdf
