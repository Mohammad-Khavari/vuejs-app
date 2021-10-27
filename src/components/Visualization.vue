<template>
    <h1>National Contiguity</h1>
    <div class="flag flag-us"></div>
    <div id="container">
        <div id="graph"></div>
    </div>
</template>
<script>
import * as d3 from "D3";
import * as data from "../countries-data.json"

export default{
    mounted(){
let margin = { top: 10, right: 5, bottom: 10, left: 100 },
    width = 2000 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

const svg = d3.select('#graph').append('svg')
    .attr("width", width)
    .attr("height", height);

//  const svg1 = d3.create("svg")
//       .attr("viewBox", [0, 0, width, height]);

//const countryName = d3.select('#graph').append('div')
//  .attr("class", "countryName")
//.style({ 'background': 'orangered', 'color': 'white', 'width': '90px' });


const nodes = data["nodes"];
const links = data["links"];
// console.log("this is nodes " , nodes)
// console.log("this is links " , links)

let drag = d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);

const force = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(-20))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("link", d3.forceLink(links))
    .force("collide", d3.forceCollide(30))
    .on("tick", ticked);


const link = svg
    .append("g")
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')



// const node = svg
//     .append("g")
//     .selectAll('circle')
//     .data(nodes)
//     .enter()
//     .append('circle')
//     .attr('r', '20')
//     .attr('fill', d => 'lightgreen')
const node = svg
    .append("g")
    .selectAll("g")
    .data(nodes).enter()
    .append("g")
    .call(drag)

// const circles = node
//     .append("circle")
//     .attr("r", 20)
//     .attr("fill", "lightgreen")
    

const texts = node
    .append("text")
    .text(d => {
        return d.country
    })

 const image = node.append("svg:image")
    .attr('width', 40)
    .attr('height', 64)
    .attr('xlink:href', d => `/separate/${d.code}.png`)
//const texts = svg.append("g").selectAll("text").data(nodes).enter().append("text").text(d => d.code)
function ticked() {
    // texts.attr("x", d => d.x)
    // texts.attr("y", d => d.y)

    link.attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)

    node.attr("transform", function (d) {
        return "translate(" + d.x + ", " + d.y + ")";
    })
    // node.attr("cx", d => d.x)
    //     .attr("cy", d => d.y)
}


function dragstarted(d) {
    force.alphaTarget(0.2).restart();
     d.subject.fx = d.subject.x;
     d.subject.fy = d.subject.y;
}
function dragged(d) {
   d.subject.fx = d.x;
   d.subject.fy = d.y;
}
function dragended(d) {
    force.alphaTarget(0);
    d.subject.fx = null;
    d.subject.fy = null;

}





    }
}




</script>
<style >
h1 {
    text-align: center;
}
#container {
    margin: auto;
}
line {
    stroke: red;
    stroke-width: 3px;
}
#flags {
    position: absolute;
}
text {
    user-select: none;
    
}

image:hover {
    cursor: grabbing;
}
</style>