
<template >

    <div v-if="propsItem" class="myBox flex flex-col mx-auto w-60 border border-green-600 rounded-md items-center">
        <div class="flag flag-us"></div>
        <h2>
            <strong>Name:</strong>
            {{ propsItem.username }}
        </h2>
        <p>
            <strong>Age:</strong>
            {{ propsItem.age }}
        </p>
        <p>
            <strong>Location:</strong>
            {{ propsItem.location }}
        </p>
        <input
            class="transform hover:scale-110 motion-reduce:transform-none w-min md:p-0.5 rounded-md"
            type="button"
            value="Remove"
            @click="removeThisElement"
        />
    </div>
</template>

<script>
import draggable from "vuedraggable"
export default {
    name: 'BoxElements',
    components:{
        draggable,
    },
    data(){
        return{
            drag: false
        }
    },
    props: {
        propsItem: Object
    },
    methods: {
        removeThisElement() {
            console.log("I yell please remove " + JSON.stringify(this.propsItem));
            this.$emit('removeIcamElement', this.propsItem)
        }
    }
};
</script>

<style>
.myBox {
    @apply mt-8 flex-wrap bg-green-100;
}
</style>