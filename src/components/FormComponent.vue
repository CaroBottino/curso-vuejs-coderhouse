<template>
  <div class="form-demo">
    <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
      <p>Errors detected in form:</p>
      <ul>
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
    </div>

    <form @submit.prevent="submitHandler">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="form.name"
          placeholder="Enter your name"
          autocomplete="given-name"
          required
        />
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input
          type="text"
          class="form-control"
          id="surname"
          v-model="form.surname"
          placeholder="Enter your surname"
          autocomplete="family-name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          autocomplete="email"
          required
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="form.password"
          placeholder="Password"
          required
        />
      </div>
      <div class="form-check">
        <label>Document type</label>
        <div class="row">
          <div class="col">
            <input
              type="radio"
              id="documentDNI"
              v-model="form.document"
              value="dni"
            />
            <label for="documentDNI">DNI</label>
          </div>

          <div class="col">
            <input
              type="radio"
              id="documentPassport"
              v-model="form.document"
              value="passport"
            />
            <label for="documentPassport">Passport</label>
          </div>

          <div class="col">
            <input
              type="radio"
              id="documentVisa"
              v-model="form.document"
              value="visa"
            />
            <label for="documentVisa">VISA</label>
          </div>
        </div>
      </div>
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="legal"
          v-model="form.legal"
          required
        />
        <label class="form-check-label" for="legal"
          >I accept the privacy policies</label
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  props: {
    users: {
      Array,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: "",
        password: "",
        document: "",
        legal: false,
        extra: "",
      },
      errors: [],
    };
  },
  methods: {
    submitHandler() {
      this.errors = [];

      if (this.form.document === "") {
        this.errors.push("Document type must be selected");
      }

      if (this.$props.users.find((u) => u.email === this.form.email)) {
        this.errors.push("Email already used");
      }

      if (!this.checkPassword(this.form.password)) {
        this.errors.push(
          "Password must have minimum length of 8 characters, maximum length of 31, contain at least 1 capital leter, at least 1 number and at least 1 special character."
        );
      }

      if (this.errors.length > 0) return;

      this.$emit("submitForm", this.form);

      this.form = {
        name: "",
        surname: "",
        email: "",
        password: "",
        document: "",
        legal: false,
        extra: "",
      };
      this.errors = [];
    },
    checkPassword(pass) {
      if (
        pass.length < 8 ||
        pass.length > 31 ||
        !pass.match(/[A-Z]/) ||
        !pass.match(/[0-9]/) ||
        !pass.match(/[.,:!?]/)
      ) {
        return false;
      }

      return true;
    },
  },
};
</script>

<style scoped>
.form-demo {
  margin-left: 20%;
  margin-right: 20%;
}

label {
  padding: 5px;
}

button {
  margin: 20px;
}
</style>
