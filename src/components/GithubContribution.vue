<template>
    <div class="flex justify-content-center align-items-center flex-column">
        <div class="">
            <h3>My Github Contributions:</h3>
        </div>
        <div v-if="loading">
            <Loading/>
        </div>
        <div v-else class="flex flex-row">
            <div v-for="(week, index) in contributions" :key="index" class="flex flex-column">
                <div v-for="(day, index) in week.contributionDays " :key="index">
                    <div :style="{'background-color': day.color}" style="height: 0.5rem; width: 0.5rem; margin: 0.10rem;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Backend from '@/service/backend';
import Loading from './Loading.vue';
import { IContributionDays } from '@/service/backend'

export default defineComponent({
    name: "github-contribution",
    components: {
        Loading
    },
    data() {
        return {
            contributions: [] as IContributionDays[],
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