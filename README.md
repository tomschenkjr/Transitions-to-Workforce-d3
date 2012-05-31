Introduction
============
The objective of this project is to create an interative web page showing the relationships between community college major and employment. The design is based on a [static poster] created using [Circos] as the primary image. The left side of the diagram represents the various community college majors aggregated by the career clusters. The right side of the diagram represents the two-digit NAICS codes. ["Measuring Transitions into the Workforce as a Form of Accountability"] explains the methodology behind the approach. The main diagram was created using [d3.js] [chord diagram]. The ultimate goal is to display everything using style sheets, javascript, or svg.

Files
=====

visualizing-transitions.html
----------------------------
The HTML file for display. It contains the SVG code to display the Venn diagram in the webpage.

chord.js
--------
Contains the d3.js javascript code to display the main diagram. References to the d3.js installation available on GitHub.

simple-diagram.png
------------------
A simple diagram illustrating the chord/Circos diagram. Ultimately, I would like to replace this with either javascript or SVG.

style.css
---------
Stylesheet for the HTML file, some portions of the stylesheet help format the chord/Circos diagram.

Contact
=======
You can contact the original author on the GitHub, at tomschenkjr@gmail.com, or on Twitter @tomschenkjr.

[static poster]: http://tomschenkjr.files.wordpress.com/2009/10/visualizing-transitions-poster-copy1.pdf
[Circos]: http://circos.ca/
[d3.js]: http://d3js.org/
[chord diagram]: http://mbostock.github.com/d3/ex/chord.html
["Measuring Transitions into the Workforce as a Form of Accountability"]: http://www3.airweb.org/images/irapps32.pdf