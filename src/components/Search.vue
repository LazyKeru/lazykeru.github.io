<template>
    <div class="grid">
        <div class="col-6">
            <MultiSelect 
                v-model="selectedTagsModel"
                :options="tags"
                optionLabel="text"
                placeholder="Select tags"
                class="w-full"
                display="chip"
            >
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <i :class="'pi ' + slotProps.option.icon"></i>
                        <span class="ml-2">{{slotProps.option.text}}</span>
                    </div>
                </template>
                <template #chip="slotProps">
                    <div>
                        <i :class="'pi ' + slotProps.value.icon"></i>
                        <span>{{slotProps.value.text }}</span>
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
import MultiSelect from 'primevue/multiselect';
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
        tags:{
            type: Array as () => ITag[],
            required: true
        },
        selectedTags:{
            type: Array as () => ITag[],
            required: true
        }
    },
    computed: {
        selectedTagsModel: {
            get(): ITag[] {
                return this.selectedTags
            },
            set(value: ITag[]) {
                this.$emit('update:selectedTags', value)
            }
        }
    }
    
})

</script>