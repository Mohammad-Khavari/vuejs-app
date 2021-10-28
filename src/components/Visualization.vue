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

export default {
    mounted() {
        let margin = { top: 10, right: 5, bottom: 10, left: 100 },
            width = 2000 - margin.left - margin.right,
            height = 900 - margin.top - margin.bottom;

        const svg = d3.select('#graph').append('svg')
            .attr("width", width)
            .attr("height", height);


        const nodes = data["nodes"];
        const links = data["links"];

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

        const node = svg
            .append("g")
            .selectAll("g")
            .data(nodes).enter()
            .append("g")
            .call(drag)


        const texts = node
            .append("text")
            .text(d => {
                return d.country
            })

        const image = node.append("svg:image")
            .attr('width', 40)
            .attr('height', 64)
            .attr('xlink:href', d => `/separate/${d.code}.png`)

        function ticked() {


            /**
             * Checks whether a given coordinates is within
             * two limits (lower and upper). Useful to make
             * sure that nodes and links to not leave the
             * viewport.
             * This function also takes care of the size of
             * the elements, as a value of 0 for x would
             * move them out of the viewport.
             * 
             * @argument {number} value the value to check
             * @argument {boolean} x whether the checked value is on the x axis (or y axis, if false)
             */
            function checkExtent(value, x = true) {
                /** @type {number} The minimal number, based on the size of the flag (either 40 for x axis or 64 for y axis) */
                const lowerLimit = x ? 40 : 64
                /** @type {number} The maximum number, based on the size of the flat */
                const upperLimit = x ? width - 40 : height - 64

                /** If the value is below the lower limit, return the lower limit */
                if (value < lowerLimit) return lowerLimit
                /** Else if the value is above the upper limit, return the upper limit */
                else if (value >= upperLimit) return upperLimit
                /** Else if the value is within the limits, return the value */
                else return value
            }

            link.attr('x1', d => checkExtent(d.source.x)) // would return any number between 40 and 1960
                .attr('y1', d => checkExtent(d.source.y, false)) // would return any number between 64 and 900
                .attr('x2', d => checkExtent(d.target.x)) // same as L120, but for the other side of the x axis
                .attr('y2', d => checkExtent(d.target.y, false)) // same as L121, but for the other side of the y axis

            node.attr("transform", function (d) {
                return "translate(" + checkExtent(d.x) + ", " + checkExtent(d.y, false) + ")"; // Here too, we limit the movement of the nodes
            })

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
    stroke: rgb(236, 179, 21);
    stroke-width: 2px;
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