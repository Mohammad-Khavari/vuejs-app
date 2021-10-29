<template>
    <div class="h-24 bg-green-700 mb-4 flex flex-row">
        <button
            id="btn0"
            class="transition ease-out duration-700 border-double border-4 border-yellow-500 p-1 m-2 bg-purple-100 rounded h-10 w-32"
            @click="navigate"
            v-if="isHome"
        >Visualization</button>
        <button
            id="btn1"
            class="transition ease-out duration-700 border-double border-4 border-yellow-500 p-1 m-2 bg-purple-100 rounded h-10 w-32"
            @click="navigate"
            v-if="!isHome"
        >Home</button>
         <button
            id="btn2"
            class="transition ease-out duration-700 border-double border-4 border-yellow-500 p-1 m-2 bg-purple-100 rounded h-10 w-32"
            @click="navigateToDaggable"
            v-if="isDraggable"
        >Draggable</button>
    </div>
</template>

<script>
export default {

    data() {


        return {
            txt: "Visualization"

        }
    },
    computed: {
        isHome() {

            if (this.$route.name === "Home") {
                return true
            } else {
                return false
            }
        },
        isDraggable(){
            if(this.$route.name === "Drag"){
               return false
            }else{
                return true
            }
        }

    },
    methods: {

        navigate() {

            if (this.isHome) {
                this.$router.push('visualization')

            }
            else if (!this.isHome) 
            {
                this.$router.push('/')

            }
           

        },
        navigateToDaggable(){

             if (this.isDraggable)
             {
                this.$router.push('/draggable')
            }
        }


    }

}
</script>
