<template>
  <div class="form-demo">
    <h1>Form made with Vue-Form</h1>

    <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
      <p>Errors detected in form:</p>
      <ul>
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
    </div>

    <vue-form :state="formstate" @submit.prevent="onSubmit">
      <div class="form-group">
        <validate tag="label">
          <span>Name</span>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="form.name"
            required
          />
          <field-messages name="name" show="$touched">
            <div slot="required">Name is required</div>
          </field-messages>
        </validate>
      </div>

      <div class="form-group">
        <validate tag="label">
          <span>Surname</span>
          <input
            type="text"
            name="surname"
            class="form-control"
            v-model="form.surname"
            required
          />
          <field-messages name="surname" show="$touched">
            <div slot="required">Surname is required</div>
          </field-messages>
        </validate>
      </div>

      <div class="form-group">
        <validate tag="label">
          <span>Email</span>
          <input
            type="email"
            name="email"
            class="form-control"
            v-model="form.email"
            required
          />
          <field-messages name="email" show="$touched">
            <div slot="required">Email is required</div>
            <div slot="email">Email not valid</div>
          </field-messages>
        </validate>
      </div>

      <div class="form-group">
        <validate tag="label" :custom="{ 'check-password': checkPassword }">
          <span>Password</span>
          <input
            type="password"
            name="password"
            class="form-control"
            v-model="form.password"
            required
          />
          <field-messages name="password" show="$touched">
            <div slot="required">Password is required</div>
            <div slot="check-password">
              Password must have minimum length of 8 characters, maximum length
              of 31, contain at least 1 capital leter, at least 1 number and at
              least 1 special character.
            </div>
          </field-messages>
        </validate>
      </div>

      <div class="form-group">
        <validate tag="label">
          <span>Document type</span>
          <div class="row">
            <div class="col">
              <input
                type="radio"
                name="documentType"
                id="documentDNI"
                v-model="form.document"
                value="dni"
                required
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
                required
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
                required
              />
              <label for="documentVisa">VISA</label>
            </div>
          </div>
          <field-messages name="documentType" show="$touched">
            <div slot="checked">Document type is required</div>
          </field-messages>
        </validate>
      </div>

      <div class="form-group">
        <validate tag="label">
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
          <field-messages name="email" show="$touched">
            <div slot="required">Accepting privacy policies is required</div>
          </field-messages>
        </validate>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </vue-form>
    <pre>{{ formstate.$valid }}</pre>
  </div>
</template>

<script>
export default {
  name: "VueFormComponent",
  data() {
    return {
      formstate: {},
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
    onSubmit() {
      this.errors = [];

      if (this.formstate.$valid) {
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
        return;
      } else {
        this.errors.push(this.formstate.$error);
      }
    },
    checkPassword(value) {
      return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        value
      );
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
