<template>
    <div>
        <h2>Welcome to QR</h2>
        <p>Generate qr codes for your own website</p>
        <hr>
        <div class="form-group">
            <label>Your website address:</label>
            <input type="text" class="form-control" v-model="address">
        </div>
        <a :href="url" target="_blank" class="btn btn-primary" :disabled="!address">Generate</a>
        <button class="btn btn-primary" :disabled="!address" @click="saveData">Save</button>
        <button class="btn btn-secondary" @click="clearInput" :disabled="!address">Clear</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                address: '',
                prefix: `https://www.qrtag.net/api/qr_4.png?url=`,
            }
        },

        computed: {
            url() {
                const url = this.prefix + this.address;
                return url;
            }
        },
        methods: {
            clearInput() {
                this.address = ''
            },
            saveData() {
                const data = {
                    url: this.url,
                    date: new Date()
                }
                this.$store.commit('addLink', data);
            },
        }
    }
</script>

<style scoped>
[disabled] {
    pointer-events: none;
    cursor: default;
    background-color: gray;
    border: 1px solid gray;
    opacity: .65;
}
</style>