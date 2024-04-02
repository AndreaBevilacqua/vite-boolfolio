<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.content.slice(0, 350);
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
        <div class="card-header">
            <h2>{{ project.title }}</h2>
        </div>
        <div class="card-body">
            <p>{{ abstract }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <address>By: {{ project.user_id }}</address>
            <small>Pubblicato il {{ pubblicationDate }}</small>
        </div>
    </div>
</template>


<style></style>