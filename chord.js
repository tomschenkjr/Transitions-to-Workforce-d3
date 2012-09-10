// From http://mkweb.bcgsc.ca/circos/guide/tables/
var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .matrix([
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,9,1,9,0,0,0,9,1,1,3,5,7,0,2,11,59],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,5,0,0,0,1,0,0,0,0,2,0,0,12,14],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,29,2,8,0,0,0,9,0,0,3,1,5,0,4,3,43],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,219,13,76,0,0,3,49,5,4,22,31,69,14,31,107,481],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,150,61,248,0,5,19,301,18,22,122,77,292,24,105,260,1454],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,33,19,60,0,0,8,57,8,1,27,28,27,17,13,105,394],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,58,65,246,3,1,20,222,27,44,73,57,23,59,20,190,1285],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,20,4,53,0,0,4,32,4,1,20,15,17,7,4,78,217],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,4,31,64,1,2,2,43,5,2,60,8,2,20,4,10,291],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,16,175,1,18,3,96,5,14,71,23,1,33,1,5,714],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,22,0,1,0,22,1,3,8,1,3,3,2,4,75],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,17,80,0,0,1,58,1,4,37,5,5,6,25,2,242],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,6,0,0,0,4,2,1,4,1,0,0,1,1,24],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,29,17,111,1,1,6,172,19,14,41,46,14,17,10,50,631],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,12,8,65,12,2,5,167,5,78,30,15,7,9,5,3,761],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,8,20,202,3,4,36,2333,21,117,37,44,3,18,6,5,1657],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,1,4,18,0,0,1,35,11,2,5,8,1,6,3,2,155],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,31,27,119,4,0,7,146,76,24,35,35,6,20,12,30,793],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,10,12,34,0,0,4,62,2,12,17,5,7,7,4,79,282],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,11,1,36,1,0,4,97,2,4,13,113,8,4,6,5,311],
    [26,0,3,33,65,84,65,19,10,6,1,13,0,40,23,12,15,14,9,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [9,3,29,219,150,33,58,20,4,6,6,14,2,29,12,8,1,31,10,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,2,13,61,19,65,4,31,16,6,17,0,17,8,20,4,27,12,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [9,5,8,76,248,60,246,53,64,175,22,80,6,111,65,202,18,119,34,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,3,0,1,1,0,0,0,1,12,3,0,4,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,5,0,1,0,2,18,1,0,0,1,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,3,19,8,20,4,2,3,0,1,0,6,5,36,1,7,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [9,1,9,49,301,57,222,32,43,96,22,58,4,172,167,2333,35,146,62,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,5,18,8,27,4,5,5,1,1,2,19,5,21,11,76,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,4,22,1,44,1,2,14,3,4,1,14,78,117,2,24,12,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [3,0,3,22,122,27,73,20,60,71,8,37,4,41,30,37,5,35,17,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [5,0,1,31,77,28,57,15,8,23,1,5,1,46,15,44,8,35,5,113,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [7,2,5,69,292,27,23,17,2,1,3,5,0,14,7,3,1,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,14,24,17,59,7,20,33,3,6,0,17,9,18,6,20,7,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [2,0,4,31,105,13,20,4,4,1,2,25,1,10,5,6,3,12,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,12,3,107,260,105,190,78,10,5,4,2,1,50,3,5,2,30,79,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [59,14,43,481,1454,394,1285,217,291,714,75,242,24,631,761,1657,155,793,282,311,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]);

var width = 1300,
    height = 910,
    innerRadius = width * .22,
    outerRadius = innerRadius * 1.07;

var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    .range(["#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#787678","#ed1c24","#991b20","#972a67","#6e398d","#856699","#5256a6","#30a2d3","#63bdcf","#4d8693","#78c27f","1b7c3e","#4db957","#85a23d","#bbb532","#f1eb18","#f09221","#c64d27"])

var clusters = ["Agriculture", "Mining", "Utilities", "Construction", "Manufacturing", "Wholesale Trade", "Retail Trade", "Transportation", "Information Technology", "Finance & Insurance", "Real Estate", "Professional/Scientific/Tech.", "Management", "Admin./Support/Waste Mgmt./Remediation", "Educational Services", "Health Care & Social Assistance", "Arts/Entertainment & Recreation", "Accomodation & Food Services", "Other Service", "Public Administration", "Agriculture", "Architecture & Construction", "Arts/AV Tech./Communication", "Business Management & Admin.", "Education", "Finance", "Government & Public Admin.", "Health Science", "Hospitality & Tourism", "Human Services", "Information Technology", "Law/Public Safety/Corrections/Security", "Manufacturing", "Marketing", "STEM", "Transportation/Distribution/Logistics", "College Parallel"];

var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.append("g")
  .selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.index); })
    .style("stroke", function(d) { return fill(d.index); })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));

var ticks = svg.append("g")
  .selectAll("g")
    .data(chord.groups)
  .enter().append("g")
  .selectAll("g")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius + ",0)";
    });

ticks.append("line")
    .attr("x1", 1)
    .attr("y1", 0)
    .attr("x2", 5)
    .attr("y2", 0)
    .style("stroke", "#787678");

ticks.append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("text-anchor", function(d) {
      return d.angle > Math.PI ? "end" : null;
    })
    .attr("transform", function(d) {
      return d.angle > Math.PI ? "rotate(180)translate(-16)" : null;
    })
    .text(function(d) { return d.label; });

var label = svg.append("g")
  .selectAll("g")
    .data(chord.groups)
  .enter().append("g")

label.append("text")
    .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
    .attr("dy", ".40em")
    .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + (innerRadius + 50) + ")"
          + (d.angle > Math.PI ? "rotate(180)" : "");
    })
    .text(function(d) { return clusters[d.index]; });
    // .on("mouseover", fade(.1))
    // .on("mouseout", fade(1));

svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.target.index); })
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("opacity", 1);

/** Returns an array of tick angles and labels, given a group. */
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 100).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v
    };
  });
}

/** Returns an event handler for fading a given chord group. */
function fade(opacity) {
  return function(g, i) {
    svg.selectAll("g.chord path")
        .filter(function(d) {
          return d.source.index != i && d.target.index != i;
        })
      .transition()
        .style("opacity", opacity);
  };
}
