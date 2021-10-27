<template>
    <div class="h-24 bg-green-700 mb-4 flex flex-row">
        <button id="test"
            class="transition ease-out duration-700 border-double border-4 border-yellow-500 p-1 m-2 bg-purple-100 rounded h-10 w-32"
            @click="navigate"
        >Visualization</button>
        <button
            class="transition ease-out duration-700 border-double border-4 border-yellow-500 p-1 m-2 bg-purple-100 rounded h-10 w-32"
            @click="home"
            :class="{hidden: toggle}"
        >Home</button>
    </div>
</template>

<script>
export default {
    
    data() {
       return{
          toggle: true
       }
    },
    methods: {
        navigate() {
            if (this.toggle){
              this.$router.push('visualization')
              this.toggle= false
               
            }
            if(this.toggle){
                window.location.pathname ==='/visualization'
                this.toggle= true
               }
        },
        home(){
            if(this.toggle === false){
             this.$router.push('/')
             this.toggle= true
            }
            
        },
    }
}
</script>
