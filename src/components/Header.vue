<template>
    <div class="m-5 flex flex-1 justify-content-center">
        <div class="grid grid-nogutter">
            <img src="../assets/profile.jpg" alt="" class="border-circle h-15rem shadow-8"/>
            <div>
                <p class="text-3xl font-bold">Killian ALLAIRE</p>
                <div class="ml-6">
                    <Contact icon="pi pi-github" link="https://github.com/LazyKeru" information="LazyKeru" />
                    <Contact icon="pi pi-linkedin" link="https://fr.linkedin.com/in/killian-allaire-672756154" information="Killian ALLAIRE" />
                    <Contact icon="pi pi-envelope" link="" information="killian.allaire@hotmail.com" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Contact from './Contact';

export default {
    name: "my-header",
    components: {
        Contact
    }
}
</script>