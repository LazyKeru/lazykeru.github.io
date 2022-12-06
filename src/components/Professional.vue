<template>
    <div class="p-5 bg-primary-reverse shadow-5 border-round-xl fadein animation-duration-1000">
        <div class="grid">
            <div class="col-5 justify-content-start">
                <p class="text-left text-xl font-semibold">
                    {{title}}
                </p>
            </div>
            <div class="col-6 justify-content-start">
                <p class="text-center text-xl font-medium">
                    {{duration}}
                </p>
            </div>
        </div>
        <div class="grid">
            <div>
                <p class="col text-justify text-base"> 
                    {{description}}
                </p>
            </div>
        </div>
        <div class="grid">
            <div v-for="(tag, index) in tags" :key="index" class="mr-3">
                <p-chip :label="tag.text" :icon="tag.icon"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-experiences",
    props: {
        title: String,
        duration: String,
        description: String,
        tags: Object,
    },
}
</script>