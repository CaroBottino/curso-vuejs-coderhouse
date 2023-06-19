<template>
  <div class="form-demo">
    Formulario

    <form @submit.prevent="submitHandler">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          v-model="name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input
          type="text"
          class="form-control"
          id="surname"
          name="surname"
          v-model="surname"
          placeholder="Enter your surname"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          v-model="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
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
          name="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="form-check">
        <label for="">Document type</label>
        <div class="row">
          <div class="col">
            <input
              type="radio"
              name="documentType"
              id="documentDNI"
              v-model="document"
              value="dni"
            />
            <label for="documentDNI">DNI</label>
          </div>

          <div class="col">
            <input
              type="radio"
              name="documentType"
              id="documentPassport"
              v-model="document"
              value="passport"
            />
            <label for="documentPassport">Passport</label>
          </div>

          <div class="col">
            <input
              type="radio"
              name="documentType"
              id="documentVisa"
              v-model="document"
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
          name="legal"
          id="legal"
          v-model="legal"
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
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      document: "",
      legal: false,
    };
  },
  methods: {
    submitHandler() {
      if (this.document === "") {
        alert("Document type must be selected");
        return;
      }

      if (!this.checkPassword(this.password)) {
        alert("Password must be...");
        return;
      }

      alert("Form sent");
    },
    checkPassword(pass) {
      if (pass.length < 8) {
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
</style>
