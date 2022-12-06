<template>
    <div class="grid grid-nogutter">
        <div @click="$router.push('/')" class="col cursor-pointer transition-colors transition-duration-500 hover:bg-primary">
            <p>
                Main
            </p>
        </div>
        <div @click="$router.push('/experience')" class="col cursor-pointer transition-colors transition-duration-500 hover:bg-primary">
            <p>
                Experience
            </p>
        </div>
        <div @click="$router.push('/projects')" class="col cursor-pointer transition-colors transition-duration-500 hover:bg-primary">
            <p>
                Projects
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "page-navbar"
}
</script>