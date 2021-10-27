import * as d3 from "d3";
import * as data from "../countries-data.json"
let margin = {top: 10,right: 5, bottom: 10, left: 100},
width = 1400-margin.left - margin.right,
height = 900-margin.top - margin.bottom;

const svg = d3.select('body').append('svg')
   .attr("width", width)
   .attr("height", height);

//  const svg1 = d3.create("svg")
//       .attr("viewBox", [0, 0, width, height]);
      
const countryName = d3.select('body').append('div')
   .attr("class", "countryName")
   .style({'background': 'orangered', 'color': 'white','width':'90px'});


    const nodes = data["nodes"];
    const links = data["links"];


const force = d3.forceSimulation(nodes) 
       .force("link", d3.forceLink(links))
       .force("charge", d3.forceManyBody().strength(-30))
       .force("center", d3.forceCenter(width /2, height/2))
       .on("tick", ticked);


const link = svg.selectAll('.link').data(links)
    .enter().append('line')
    .attr('class', 'link');


const node = svg.selectAll('.node')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r','20')
    .attr('fill',d => 'black')
    

 const image = node.append("svg:image")                        
    .attr('width', 20)
    .attr('height', 24)
    .attr("xlink:href", "https://bl.ocks.org/favicon.png")
   console.log("this is image", image)

   function ticked(){
    link.attr('x1', d => d.source.x )
        .attr('y1', d => d.source.y )
        .attr('x2', d => d.target.x )
        .attr('y2', d => d.target.y )

    image.attr("x",d => d.x-10)
          .attr("y", d=> d.y-10)

    node.attr("cx", d => d.x) 
        .attr("cy", d => d.y)


}
  
function ticked() {
    link.attr('x1', function(d){return d.source.x})
        .attr('y1', function(d){return d.source.y})
        .attr('x2', function(d){return d.target.x})
        .attr('y2', function(d){return d.target.y})

    // image.attr("x", d => d.x - 10)
    //     .attr("y", d => d.y - 10)

    node.attr("cx", function(d){
        return d.x
    })
        .attr("cy", function(d){
            return d.y
        });


}