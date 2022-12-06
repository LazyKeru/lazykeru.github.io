<template>
    <div v-for="(internship, index) in internships" :key="index" class="m-8">
        <Professional :title="internship.title" :duration="internship.duration" :description="internship.description" :tags="internship.tags"/>
    </div>
</template>

<script>
import Professional from '@/components/Professional.vue';
export default {
    name: 'page-experience',
    components: {
        Professional
    },
    data() {
        return {
            internships : [
                {
                  title: "DevOps - Claranet",
                  duration: "2022 (5 mois)",
                  description: "Déploiement de différentes applications OpenSource dans un environnement k8s sur Azure : fournisseur OpenID Connect, solution de workflow NoOPS, et suite de recherche et d'analyse",
                  tags: [
                    {
                      icon: "pi pi-sitemap",
                      text: "K8s"
                    },
                    {
                      icon: "pi pi-cloud",
                      text: "Azure"
                    }
                  ]
                },
                {
                  title: "DevSecOps - Colas ",
                  duration: "2021 (4 mois)",
                  description: "Accompagnement d'un Audit de sécurité et préparation de la mise en place d'un WAF (pare-feu pour serveur Web). Mise en place d'un programme pour détecter les secrets codés en dur, et déploiement K8s",
                  tags: [
                    {
                      icon: "",
                      text: ""
                    }
                  ]
                },
                {
                  title: "Développeur - Bouygues Telecom",
                  duration: "2020 (4 mois)",
                  description: "Développement d'un tableau de bord sur les usage des espaces clients mobiles de l'opérateur en ReactNative, avec implémentation des méthodes CI/CD",
                  tags: [
                    {
                      icon: "",
                      text: ""
                    }
                  ]
                },
                {
                  title: "Caporal - Réserviste de l’armée de Terre",
                  duration: "2018-2023",
                  description: "Réalisation de diverses missions en tant que réserviste au sein du 3ème régiment d'infanterie de marine. Encadrant lors de stages (ex: PMT). Dont le rôle de CDE et CDG pendant des exercices.",
                  tags: [
                    {
                      icon: "",
                      text: ""
                    }
                  ]
                }
            ]
        }
    },
}
</script>