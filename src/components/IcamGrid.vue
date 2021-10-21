<template>
    <div>
        <grid-layout :layout="items" 
                     :col-num="10"
                     :row-height="30"
                     :is-draggable="draggable"
                     :is-resizable="resizable"
                     :use-css-transforms="true"
                     @breakpoint-changed="breakpointChangedEvent"
        >
            <IcamElement v-for="item in items" :key="item.name" :item=item></IcamElement>
        </grid-layout>
    </div>
</template>
<script>
import IcamElement from "./IcamElement.vue"
import {GridLayout} from "vue-grid-layout"
export default {
    components:{
      GridLayout,
      IcamElement,
    },
    data(){
        return{
            draggable: true,
            resizable: true,
            responsive: true,
        }
    },
    props: {
        items: Array
    },
    methods: {
        breakpointChangedEvent: function(newBreakpoint, newLayout){
            console.log("BREAKPOINT CHANGED breakpoint=", newBreakpoint, ", layout: ", newLayout );
        
    },
        removeThisElement() {
            console.log("I yell please remove " + JSON.stringify(this.item));
            this.$emit('removeIcamElement', this.item)
        }
    }
}
</script>

<style >
.myBox{
    @apply mt-8 flex-wrap bg-green-100;
}
</style>