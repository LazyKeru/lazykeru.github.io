<template>
    <div class="grid">
        <div class="col-6">
            <MultiSelect 
                :options="tags"
                optionLabel="text"
                placeholder="Select tags"
                class="w-full"
            >
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <i :class="'pi ' + slotProps.option.icon"></i>
                        <span class="ml-2">{{slotProps.option.text}}</span>
                    </div>
                </template>
            </MultiSelect>  
        </div>
        <div class="col-6">
            <InputText
                placeholder="Search"
                class="w-full"
            />
        </div>
    </div>
</template>

<script lang="ts">
import MultiSelect from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import { ITag } from '@/service/backend';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "search-component",
    components: {
        MultiSelect,
        InputText
    },
    props: {
        tags: Object as () => ITag[]
    },
    
})

</script>