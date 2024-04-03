<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
    computed: {
        abstract() {
            const abstract = this.project.content.slice(0, 550);
            return abstract + '...';
        },
        pubblicationDate() {
            const date = new Date(this.project.created_at);

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            // const seconds = date.getSeconds();

            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        }
    }
};
</script>

<template>
    <div class="card mt-3 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h2>{{ project.title }}</h2>
            <RouterLink v-if="!isDetail" :to="{ name: 'project-detail', params: { id: project.id } }"
                class="btn btn-primary">Vedi
            </RouterLink>
        </div>
        <div class="card-body clearfix">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="img-fluid float-start me-3"
                style="max-width: 100px;">
            <p>{{ isDetail ? project.content : abstract }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <address>By: {{ project.user_id ? project.user_id : 'Anonimo' }}</address>
            <small>Pubblicato il {{ pubblicationDate }}</small>
        </div>
    </div>
</template>


<style></style>