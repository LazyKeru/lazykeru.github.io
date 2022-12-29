<template>
  <div v-if="internshipLoading">
    Loading...
  </div>
  <div v-if="!intershipLoading">
    <div v-for="(internship, index) in loadedInternships" :key="index" class="m-4 md:m-8">
        <Professional 
          :title="internship.title" 
          :duration="internship.duration" 
          :description="internship.description" 
          :tags="internship.tags"
          class="p-5 bg-primary-reverse shadow-5 border-round-xl fadein animation-duration-1000 cursor-pointer transition-colors transition-duration-500 hover:bg-primary"
        />
    </div>
  </div>
</template>

<script>
import Professional from '@/components/Professional.vue';
import singletonInstance from '@/service/database'
export default {
    name: 'page-experience',
    components: {
        Professional
    },
    data() {
        return {
            internshipLoading: false,
            loadedInternships: [],
            lazyParamsInternship: {},
            fetcherAPI: null
        }
    },
    created() {
      this.fetcherAPI = singletonInstance
    },
    mounted() {
      this.internshipLoading = true;
      this.lazyParamsInternship = {
        page: 0
      }
      this.lazyLoadInternships();
    },
    methods: {
      lazyLoadInternships () {
        this.loadedInternship = true;
        setTimeout(() => {
          this.fetcherAPI.getExperience()
          .then(
            data => {
              this.loadedInternships = data;
              this.internshipLoading = false;
            }
          )
          .catch(
            error => {
              console.log(error)
              this.internshipLoading = false;
            }
          )
        }, 1000)
      }
    },
}
</script>