<template>
  <div v-if="loading">
    <Loading/>
  </div>
  <div v-else>
    <Search
      class="p-5"
      :tags="tags"
      v-model:selectedTags="selectedTags"
      v-model:searchArray="searchArray"
    />
    <div v-for="(project, index) in filteredProjects" :key="index" class="m-4 md:m-8">
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
import { IProject, ITag } from '@/service/backend'

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
        loading: true,
        selectedTags: [] as ITag[],
        searchArray: ''
      }
    },
    mounted() {
      Backend.getProjects().then((response) => {
        this.projects = response
        this.loading = false
      })
    },
    methods: {
      filteredProjectsByTag(projects:IProject[]): IProject[] {
        if (this.selectedTags.length === 0) {
          return projects
        }
        return projects.filter((project) => {
          return project.tags.some((tag) => {
            return this.selectedTags.some((selectedTag) => {
              return selectedTag.text === tag.text
            })
          })
        })
      },
      filteredProjectsByArray(projects:IProject[]): IProject[] {
        if (this.searchArray.length === 0) {
          return projects
        }
        return projects.filter((project) => {
          return project.title.toLowerCase().includes(this.searchArray.toLowerCase()) || project.description.toLowerCase().includes(this.searchArray.toLowerCase())
        })
      }
    },
    computed: {
      tags(): ITag[] {
        return this.projects.map((project) => {
          return project.tags
        })
        .flat()
        .filter(
          (element, index, self) => {
            return index === self.findIndex(tag => tag.text === element.text)
          }
        )
      },
      filteredProjects(): IProject[] {
        return this.filteredProjectsByArray(this.filteredProjectsByTag(this.projects))
      }
    }
})
</script>