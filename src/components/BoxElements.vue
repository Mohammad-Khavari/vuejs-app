<template>
<div class="myBox flex flex-col mx-auto w-60 border border-green-600 rounded-md items-center">
        <h2><strong>Name:</strong> {{item.name}}</h2>
        <p><strong>Age: </strong> {{item.age}}</p>
        <p><strong>Location:</strong> {{item.location}}</p>
        <input class="transform hover:scale-110 motion-reduce:transform-none w-min md:p-0.5 rounded-md" type="button" value="Remove" @click="removeThisElement"/>    
</div>



</template>
<script>
export default {
    props: {
        item: Object 
    },
    methods: {
        removeThisElement() {
            console.log("I yell please remove "+ JSON.stringify(this.item));
            this.$emit('removeIcamElement', this.item)
        }
    }
}
</script>
<style>
.myBox{
    @apply mt-8 flex-wrap bg-green-100;
}

</style>