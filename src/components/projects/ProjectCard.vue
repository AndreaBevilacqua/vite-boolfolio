<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.content.slice(0, 350);
            return abstract + '...';
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
            <small>Pubblicato il {{ project.created_at }}</small>
        </div>
    </div>
</template>


<style></style>