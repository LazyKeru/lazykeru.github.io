<template>
    <a :href="link" class="no-underline">
        <div class="flex flex-1 align-items-center align-content-center p-1 transition-colors transition-duration-500 text-color hover:text-primary overflow-hidden text-overflow-ellipsis">
            <i :class="icon"/>
            <p class="ml-2 m-0 ">
                {{information}}
            </p> 
        </div>
    </a>
</template>

<script lang="ts">
export default {
    name: "contact-info",
    props: {
        icon: String,
        link: String,
        information: String
    }
}
</script>

<style>

</style>