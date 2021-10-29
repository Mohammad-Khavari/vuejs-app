<template>
    <div class="myInput flex flex-col w-60 mx-auto space-y-3" v-on:keyup.enter="onEnter">
        <input type="text" v-model="username" placeholder="Please give a name..." />
        <input type="number" v-model="age" placeholder="Please give your age..." />
        <input type="text" v-model="location" placeholder="Please give your location here..." />
        <input
            class="w-32 relative -right-14 rounded-md"
            type="button"
            value="Add It"
            @click="addElement"
        />
    </div>
    <div class="mx-auto w-1/2">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <BoxElements
                v-for="element in icamElements"
                :key="element.id"
                :propsItem="element"
                @removeIcamElement="removeInOurList"
            />
        </div>
    </div>
</template>

<script>
import BoxElements from './BoxElements.vue'

export default {
    components: {
        BoxElements,
        
    },
    data() {
        return {
            username: null,
            age: null,
            location: null,
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
            if (this.username && this.age && this.location !== "") {
                this.icamElements.push({
                    username: this.username,
                    age: this.age,
                    location: this.location
                })

            } else {
                return
            }
            this.username = ""
            this.age = ""
            this.location = ""
            this.saveIt()
        },
        onEnter() {
            if (this.username && this.age && this.location !== "") {
                this.icamElements.push({
                    username: this.username,
                    age: this.age,
                    location: this.location,
                })
            } else {
                return
            }
            this.saveIt()
            this.username = ""
            this.age = ""
            this.location = ""
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
