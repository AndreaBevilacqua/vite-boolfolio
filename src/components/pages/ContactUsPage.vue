<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact-message/';
const defaultForm = { email: '', subject: '', message: '' };

export default {
    name: 'ContactcUsPage',
    data: () => ({
        form: {
            email: '',
            subject: '',
            message: ''
        }
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                .then(res => {
                    this.form = { ...defaultForm };
                })
                .catch(err => { console.error(err) })
                .then(() => { });
        }
    }
}
</script>

<template>
    <main>
        <h1 class="my-5">Conttataci</h1>
        <form @submit.prevent="sendForm" novalidate>
            <div class="mb-3">
                <label for="email" class="form-label">La tua email <sup class="text-danger">*</sup></label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com"
                    v-model.trim="form.email" required>
            </div>
            <div class="mb-3">
                <label for="subject" class="form-label">Oggetto della mail <sup class="text-danger">*</sup></label>
                <input type="text" class="form-control" id="subject" v-model.trim="form.subject" required>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Contenuto del messaggio <sup class="text-danger">*</sup></label>
                <textarea id="message" class="form-control" rows="5" v-model.trim="form.message"></textarea>
            </div>
            <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">Invia</button>
            </div>
        </form>
    </main>
</template>

<style></style>