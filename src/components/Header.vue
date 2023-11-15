<template>
    <div class="m-5 flex flex-1 justify-content-center">
        <div class="grid grid-nogutter">
            <div class="col-12 md:col-6">
                <img src="../assets/profile.jpg" alt="" class="border-circle h-15rem shadow-8"/>
            </div>
            <div class="col-12 md:col-6">
                <p class="text-3xl font-bold text-center md:text-left">
                    Killian ALLAIRE
                </p>
                <div class="md:ml-6 ml-1">
                    <Contact icon="pi pi-github" link="https://github.com/LazyKeru" information="LazyKeru" />
                    <Contact icon="pi pi-linkedin" link="https://fr.linkedin.com/in/killian-allaire-672756154" information="Killian ALLAIRE" />
                    <Contact icon="pi pi-envelope" link="" information="killian.allaire@hotmail.com" />
                </div>
            </div>
            <div class="col-12">
                <p class="text-lg md:text-xl">
                    Etudiant Ingenieur Generaliste - Spécialité Systèmes Numériques
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Contact from '@/components/Contact.vue';

@Options({
    name: "my-header",
    components: {
        Contact
    }
})

export default class Header extends Vue {

}
</script>