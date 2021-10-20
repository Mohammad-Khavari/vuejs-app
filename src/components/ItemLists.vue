<template>
 <div class="myInput flex flex-col w-min mx-auto space-y-3" v-on:keyup.enter="onEnter">
    <input type="text" v-model="Name" placeholder="Please insert a name..." >
    <input type="number" v-model="Age" placeholder="Please give your age..." >
    <input type="text" v-model="Location" placeholder="Give your location here...">
    <input type="button" value="Add It" @click="addElement"/>
 </div>
 
 <BoxElements v-for="element in icamElements" :key="element.id" :item=element @removeIcamElement="removeInOurList" />
</template>

<script>
import BoxElements from './BoxElements.vue';

export default {
    components: {
        BoxElements
    },
    data() {
        return {
            icamElements:[]
        }        
    },
    mounted(){
       if (localStorage.getItem("info")){
           try{
               this.icamElements= JSON.parse(localStorage.getItem("info"));
           }catch(e){
               localStorage.removeItem("info")
           }
       }
    },
   
    removeData(index){
     this.icamElements.splice(index, 1);
     this.saveIt
    },
    methods:{
        addElement(){
            if (this.Name && this.Age && this.Location !== "" ){
                this.icamElements.push({
                name: this.Name,
                age: this.Age,
                location: this.Location
              })
              
            }else{
                return
            } 
            this.Name = ""
            this.Age= ""
            this.Location= ""
            this.saveIt()          
        },
        onEnter(){
            if (this.Name && this.Age && this.Location !== "" ){
                this.icamElements.push({
                name: this.Name,
                age: this.Age,
                location: this.Location,
              })   
            }else{
                return
            }
            this.saveIt()
            this.Name = ""
            this.Age= ""
            this.Location= ""
        },
         saveIt(){
         localStorage.setItem("info", JSON.stringify(this.icamElements))
        },
        removeInOurList(item) {
            console.log("I should remove from my list " + JSON.stringify(item))
            var index = this.icamElements.indexOf(item)
            if (index > -1) {
                this.icamElements.splice(index, 1);
                this.saveIt()
            }
        }
    }
}
</script>
<style>
 input{
     @apply border border-green-600;
 }
 body{
     @apply bg-blue-50
 }
</style>
