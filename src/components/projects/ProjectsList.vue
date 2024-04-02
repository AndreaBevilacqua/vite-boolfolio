<script>
export default {
    name: 'ProjectsList',
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list">
        <ul>
            <li v-for="project in projects" :key="project.id">
                <h4 v-text="project.title"></h4>
            </li>
        </ul>
    </section>
</template>


<style></style>