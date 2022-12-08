<template>
    <div class="grid grid-nogutter">
        <div class="col-12">
            <div class="grid grid-nogutter">
                <div class="md:col-5 sm:col-12 justify-content-start">
                    <p class="text-left text-xl font-semibold">
                        {{title}}
                    </p>
                </div>
                <div class="md:col-5 sm:col-12 justify-content-start">
                    <p class="text-center text-xl font-medium">
                        {{duration}}
                    </p>
                </div>
            </div>
        </div>
        <div class="col-12">
            <p class="col text-justify text-base"> 
                {{description}}
            </p>
        </div>
        <div class="col-12">
            <div class="grid">
                <div v-for="(tag, index) in tags" :key="index" class="mr-3 mt-3">
                    <p-chip :label="tag.text" :icon="tag.icon"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "component-experience",
    props: {
        title: String,
        duration: String,
        description: String,
        tags: Object,
    },
}
</script>