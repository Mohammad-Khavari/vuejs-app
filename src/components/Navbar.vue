<template>
    <div class="h-24 bg-green-700 mb-4 flex flex-row">
        <button
            id="btn"
            class="transition ease-out duration-700 border-double border-4 border-yellow-500 p-1 m-2 bg-purple-100 rounded h-10 w-32"
            @click="navigate"
            v-if="isHome"
        >Visualization</button>
        <button
            id="btn"
            class="transition ease-out duration-700 border-double border-4 border-yellow-500 p-1 m-2 bg-purple-100 rounded h-10 w-32"
            @click="navigate"
            v-if="!isHome"
        >Home</button>
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

    },
    methods: {

        navigate() {

            if (this.txt === "Visualization") {
                this.$router.push('visualization')
                this.txt = "Home"

            }
            else if (this.txt === "Home") {
                this.$router.push('/')
                this.txt = "Visualization"
            }

        },


    }

}
</script>
