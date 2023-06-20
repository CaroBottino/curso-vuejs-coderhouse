<template>
  <div class="form-demo">
    <h2>Form</h2>

    <form @submit.prevent="submitHandler">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          v-model="form.name"
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
          v-model="form.surname"
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
          v-model="form.email"
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
              name="documentType"
              id="documentDNI"
              v-model="form.document"
              value="dni"
            />
            <label for="documentDNI">DNI</label>
          </div>

          <div class="col">
            <input
              type="radio"
              name="documentType"
              id="documentPassport"
              v-model="form.document"
              value="passport"
            />
            <label for="documentPassport">Passport</label>
          </div>

          <div class="col">
            <input
              type="radio"
              name="documentType"
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
          name="legal"
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
    };
  },
  methods: {
    submitHandler() {
      if (this.form.document === "") {
        alert("Document type must be selected");
        return;
      }

      if (!this.checkPassword(this.form.password)) {
        alert(
          "Password must have minimum length of 8 characters, maximum length of 31, contain at least 1 capital leter, at least 1 number and at least 1 special character."
        );
        return;
      }

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
