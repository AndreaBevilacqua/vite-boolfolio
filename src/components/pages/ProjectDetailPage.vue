<script>
import ProjectCard from '../projects/ProjectCard.vue';
import AppLoader from '../AppLoader.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard, AppLoader },
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            axios.get(endpoint + this.$route.params.id)
                .then(res => {
                    this.project = res.data;
                })
                .catch(err => {
                    console.error(err);
                })
                .then(() => {
                    this.isLoading = false;
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />

</template>

<style></style>