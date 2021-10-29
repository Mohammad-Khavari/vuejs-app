
<template >
    <div class="mx-auto w-1/2">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <BoxElements
                v-for="element in icamElements"
                :key="element.usename"
                :propsItem="element"
                @removeIcamElement="removeInOurList"
            />
        </div>
    </div>
</template>
 
<script>
import BoxElements from './BoxElements.vue'
export default {
    name: 'Draggable',
    components: {
        BoxElements,
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
    methods: {
        removeData(index) {
            this.icamElements.splice(index, 1);
            this.saveIt
        },
        removeInOurList(item) {
            console.log("I should remove from my list " + JSON.stringify(item))
            var index = this.icamElements.indexOf(item)
            if (index > -1) {
                this.icamElements.splice(index, 1);
                this.saveIt()
            }
        },
        saveIt() {
            localStorage.setItem("info", JSON.stringify(this.icamElements))
        },

    }
}
</script>
