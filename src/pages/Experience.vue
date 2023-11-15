<template>
    <div v-for="(internship, index) in internships" :key="index" class="m-4 md:m-8">
        <Professional 
          :title="internship.title" 
          :duration="internship.duration" 
          :description="internship.description" 
          :tags="internship.tags"
          class="p-5 bg-primary-reverse shadow-5 border-round-xl fadein animation-duration-1000 cursor-pointer transition-colors transition-duration-500 hover:bg-primary"
        />
    </div>
</template>

<script>
import Professional from '@/components/Professional.vue';
import Backend from '@/service/backend.ts'
export default {
    name: 'page-experience',
    components: {
        Professional
    },
    computed: {
      internships () {
        return Backend.getExperiences()
      }
    }
}
</script>