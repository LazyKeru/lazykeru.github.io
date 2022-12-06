<template>
    <div>
        <!--<img src="../assets/profile.jpg" alt="" class="border-round-md shadow-8">-->
        <p class="text-3xl font-bold">Killian ALLAIRE</p>
        <div>
            <div class="flex justify-content-around flex-wrap">
                <Contact icon="pi pi-github" link="https://github.com/LazyKeru" information="LazyKeru" />
                <Contact icon="pi pi-linkedin" link="https://fr.linkedin.com/in/killian-allaire-672756154" information="Killian ALLAIRE" />
                <Contact icon="pi pi-envelope" link="" information="killian.allaire@hotmail.com" />
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