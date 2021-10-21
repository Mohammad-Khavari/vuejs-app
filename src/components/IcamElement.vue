<template>
<grid-item :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.name">
    <span class="text">{{item.name}}</span>
</grid-item>
</template>
<script>
import {GridItem} from "vue-grid-layout"
export default{
    components:{
         GridItem
    },
    props:{
      item: Object
    }
    
}
</script>