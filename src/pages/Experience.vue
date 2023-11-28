<template>
  <div v-if="loading">
    <Loading/>
  </div>
  <div v-else>
    <Search 
      class="p-5"
      :tags="tags"
    />
    <div v-for="(internship, index) in internships" :key="index" class="m-4 md:m-8">
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

<script lang="ts">
import { defineComponent } from 'vue';
import Professional from '@/components/Professional.vue';
import Backend from '@/service/backend'
import Loading from '@/components/Loading.vue';
import Search from '@/components/Search.vue';
import { IExperience, ITag } from '@/service/backend'

export default defineComponent({

    name: 'page-experience',
    components: {
        Search,
        Professional,
        Loading
    },
    data() {
      return {
        internships: [] as IExperience[],
        loading: true
      }
    },
    mounted() {
      Backend.getExperiences().then((response) => {
        this.internships = response
        this.loading = false
      })
    },
    computed: {
      tags(): ITag[] {
        return this.internships.map((internship) => {
          return internship.tags
        })
        .flat()
        .filter(
          (element, index, self) => {
            return index === self.findIndex(tag => tag.text === element.text)
          }
        )
      }
    }
})
</script>