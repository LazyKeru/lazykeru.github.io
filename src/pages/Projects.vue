<template>
  <div>
    <Search class="p-5"/>
  </div>
  <div v-if="loading">
    <Loading/>
  </div>
  <div v-else>
    <div v-for="(project, index) in projects" :key="index" class="m-4 md:m-8">
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

<script lang="ts">
import { defineComponent } from 'vue';
import Loading from '@/components/Loading.vue';
import Project from '@/components/Project.vue';
import Backend from '@/service/backend'
import Search from '@/components/Search.vue';
import { IProject } from '@/service/backend'

export default defineComponent({
    name: "page-projects",
    components: {
        Search,
        Project,
        Loading
    },
    data() {
      return {
        projects: [] as IProject[],
        loading: true
      }
    },
    mounted() {
      Backend.getProjects().then((response) => {
        this.projects = response
        this.loading = false
      })
    }
})
</script>