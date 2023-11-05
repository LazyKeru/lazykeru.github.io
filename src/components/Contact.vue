<template>
    <a :href="link" class="no-underline">
        <div class="contact-box flex flex-1 align-items-center align-content-center p-1 transition-colors transition-duration-500 border-2 border-round-2xl border-transparent hover:border-primary">
            <i :class="icon"/>
            <p class="ml-2 m-0">
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