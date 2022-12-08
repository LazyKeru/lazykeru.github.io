<template>
    <div class="grid grid-nogutter">
        <div class="md:col-4 lg:col-2 sm:col-12">
            <div class="flex flex-1 m-5">
                <img
                    class="max-w-full" 
                    :src="image" alt=""
                >
            </div>
        </div>
        <div class="md:col-8 lg:col-10 sm:col-12">
            <div>
                <p class="text-center text-xl font-medium no-underline">
                    {{title}}
                </p>
            </div>
            <div>
                <p class="text-justify text-base no-underline">
                    {{description}}
                </p>
            </div>
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
    name: "components-porject",
    props: {
        title: String,
        description: String,
        link: String,
        image: String,
        tags: Object,
    }

}
</script>