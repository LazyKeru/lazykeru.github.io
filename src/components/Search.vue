<template>
    <div class="grid">
        <div class="col-6">
            <Dropdown 
                placeholder="Select tags"
                class="w-full"
            />  
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
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "search-component",
    components: {
        Dropdown,
        InputText
    },
})

</script>