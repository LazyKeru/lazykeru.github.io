<template>
    <div class="m-5 flex flex-1 justify-content-center">
        <div class="grid grid-nogutter">
            <div class="col-12 md:col-6 fadein animation-duration-500">
                <img src="../assets/profile.jpg" alt="" class="border-circle h-15rem shadow-8"/>
            </div>
            <div class="grid grid-nogutter col-12 md:col-6">
                <div class="col-12 fadeinright animation-duration-300">
                    <p class="m-0 text-5xl font-bold text-center md:text-left">
                        Killian ALLAIRE
                    </p>
                    <p class="m-0 text-xl font-light text-center md:text-left">
                        Ingénieur DevOps
                    </p>
                </div>
                <div class="col-12 md:my-6 my-1 mx-2 grid">
                    <div class="md:col-12 col-4">
                        <Contact icon="pi pi-github" link="https://github.com/LazyKeru" information="LazyKeru" class="fadeinright animation-duration-300"/>
                    </div>
                    <div class="md:col-12 col-4">
                        <Contact icon="pi pi-linkedin" link="https://fr.linkedin.com/in/killian-allaire-672756154" information="Killian ALLAIRE"  class="fadeinright animation-duration-300 animation-delay-150"/>
                    </div>
                    <div class="md:col-12 col-4">
                        <Contact icon="pi pi-envelope" link="" information="killian.allaire@hotmail.com" class="fadeinright animation-duration-300 animation-delay-300"/>
                    </div>
                </div>
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