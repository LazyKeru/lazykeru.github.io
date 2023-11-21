<template>
    <div>
        <Loading/>
    </div>
    <div>
        Coming soon...
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Backend from '@/service/backend';
import Loading from './Loading.vue';

export default defineComponent({
    name: "github-contribution",
    components: {
        Loading
    },
    data() {
        return {
            contributions: [],
            loading: true
        }
    },
    mounted() {
        Backend.getContributions().then((response) => {
            this.contributions = response
            this.loading = false
        })
    },
})

</script>