<template>
    <div class="myInput flex flex-col w-60 mx-auto space-y-3" v-on:keyup.enter="onEnter">
        <input type="text" v-model="Name" placeholder="Please give a name..." />
        <input type="number" v-model="Age" placeholder="Please give your age..." />
        <input type="text" v-model="Location" placeholder="Please give your location here..." />
        <input
            class="w-32 relative -right-14 rounded-md"
            type="button"
            value="Add It"
            @click="addElement"
        />
    </div>
    <div class="mx-auto w-1/2">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
            <IcamGrid
                :items="icamElements"
                @removeIcamElement="removeInOurList"
            />
        </div>
    </div>
</template>

<script>
import IcamGrid from './IcamGrid.vue';

export default {
    components: {
        IcamGrid,
       
    },
    data() {
        return {
            icamElements: []
        }
    },
    mounted() {
        if (localStorage.getItem("info")) {
            try {
                this.icamElements = JSON.parse(localStorage.getItem("info"));
            } catch (e) {
                localStorage.removeItem("info")
            }
        }
    },

    removeData(index) {
        this.icamElements.splice(index, 1);
        this.saveIt
    },
    methods: {
        addElement() {
            if (this.Name && this.Age && this.Location !== "") {
                this.icamElements.push({
                    name: this.Name,
                    age: this.Age,
                    location: this.Location,
                    x: this.icamElements.length || 0,
                    y: 0,
                    w: 1,
                    h: 1,
                    i: this.icamElements.length
                })

            } else {
                return
            }
            this.Name = ""
            this.Age = ""
            this.Location = ""
            this.saveIt()
        },
        onEnter() {
            if (this.Name && this.Age && this.Location !== "") {
                this.icamElements.push({
                    name: this.Name,
                    age: this.Age,
                    location: this.Location,
                })
            } else {
                return
            }
            this.saveIt()
            this.Name = ""
            this.Age = ""
            this.Location = ""
        },
        saveIt() {
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
input {
    @apply border border-green-600;
}
body {
    @apply bg-blue-50;
}

</style>
