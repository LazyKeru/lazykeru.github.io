<template>
  <div v-if="projectsLoading">
    Loading...
  </div>
  <div v-if="!projectsLoading">
    <div v-for="(project, index) in loadedProjects" :key="index" class="m-4 md:m-8">
      <a :href="project.link" class="no-underline">
        <Project 
            :title="project.title" 
            :description="project.description"
            :link="project.link"
            :image="project.image"
            :tags="project.tags"
            class="p-5 bg-primary-reverse shadow-5 border-round-xl fadein animation-duration-1000 cursor-pointer transition-colors transition-duration-500 hover:bg-primary"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project.vue';
import singletonInstance from '@/service/database';

export default {
    name: "page-projects",
    components: {
        Project
    },
    data() {
        return {
          projectsLoading: false,
          loadedProjects: [],
          lazyParamsProjects: {},
          fetcherAPI: null
        }
    },
    created () {
      this.fetcherAPI = singletonInstance
    },
    mounted () {
      this.projectsLoading = true
      this.lazyParamsProjects = {
        page: 0
      }
      this.lazyLoadProjects();
    },
    methods: {
      lazyLoadProjects () {
        this.projectsLoading = true
        setTimeout(
          () => {
            this.fetcherAPI.getProjects()
            .then(
              data => {
                this.loadedProjects = data
                this.projectsLoading = false
              }
            )
            .catch(
              error => {
                console.log(error)
                this.projectsLoading = false
              }
            )
          }
        )
      }
    }
}
</script>