<template>
    <div>
        <input v-model="password" type="password" data-test="password" />
        <div v-if="error">{{ error }}</div>

        <div v-if="show">{{ greeting }}</div>
    </div>
</template>

<script>
export default {
    name: "PasswordForTesting",
    data() {
        return {
            password: "",
            greeting: "Hello",
        };
    },
    props: {
        minLength: {
            type: Number,
        },
        show: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        error() {
            if (this.password.length < this.minLength) {
                return `Password must be at least ${this.minLength} characters.`;
            }
            return "";
        },
    },
};
</script>
