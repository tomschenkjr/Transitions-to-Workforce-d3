var w = 250,
    h = 250;
 
var svg = d3.select("body").append("svg:svg")
    .attr("width", w)
    .attr("height", h);
 
svg.append("svg:circle") // UI records (left)
    .attr("cx", 70)
    .attr("cy", 130)
    .attr("r", 60)
    .style("fill", "#85ceb8")
    .style("fill-opacity", ".5");

svg.append("text")
        .data(data)
    .enter().append("text")
        .attr("x",cx)
        .attr("y",cy)
        .attr("text-anchor","center")
        .text(String);
        
svg.append("svg:circle") // NSC Records (right)
    .attr("cx", 150)
    .attr("cy", 130)
    .attr("r", 60)
    .style("fill", "#f09221")
    .style("fill-opacity", ".5");
 
svg.append("svg:circle") // Education Records (top)
    .attr("cx", 110)
    .attr("cy", 60)
    .attr("r", 60)
    .style("fill", "#30a2d3")
    .style("fill-opacity", ".5");