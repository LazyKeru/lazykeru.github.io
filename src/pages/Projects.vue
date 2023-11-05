<template>
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
</template>

<script>
import Project from '@/components/Project.vue';
import Backend from '@/service/backend.ts'

export default {
    name: "page-projects",
    computed: {
      projects () {
        return Backend.getProjects()
      }
    },
    components: {
        Project
    }
}
</script>