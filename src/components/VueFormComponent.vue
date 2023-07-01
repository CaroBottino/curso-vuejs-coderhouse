<template>
  <div class="form-demo">
    <vue-form :state="formstate" @submit.prevent="onSubmit">
      <div class="form-group">
        <validate tag="label">
          <span>Name</span>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="form.name"
            autocomplete="given-name"
            required
          />
          <field-messages name="name" show="$touched">
            <div class="ok-msg">Correct!</div>
            <div slot="required" class="error-msg">Name is required</div>
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
            autocomplete="family-name"
            required
          />
          <field-messages name="surname" show="$touched">
            <div class="ok-msg">Correct!</div>
            <div slot="required" class="error-msg">Surname is required</div>
          </field-messages>
        </validate>
      </div>

      <div class="form-group">
        <validate tag="label" :custom="{ 'check-email': checkEmail }">
          <span>Email</span>
          <input
            type="email"
            name="email"
            class="form-control"
            v-model="form.email"
            autocomplete="email"
            required
          />
          <field-messages name="email" show="$touched">
            <div class="ok-msg">Correct!</div>
            <div slot="required" class="error-msg">Email is required</div>
            <div slot="email" class="error-msg">Email not valid</div>
            <div slot="check-email" class="error-msg">Email already used.</div>
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
            <div class="ok-msg">Correct!</div>
            <div slot="required" class="error-msg">Password is required</div>
            <div slot="check-password" class="error-msg">
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
                id="documentDNI2"
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
                id="documentPassport2"
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
                id="documentVisa2"
                v-model="form.document"
                value="visa"
                required
              />
              <label for="documentVisa">VISA</label>
            </div>
          </div>
          <field-messages name="documentType" show="$touched">
            <div class="ok-msg">Correct!</div>
            <div slot="checked" class="error-msg">
              Document type is required
            </div>
          </field-messages>
        </validate>
      </div>

      <div class="form-group">
        <validate tag="label">
          <input
            type="checkbox"
            class="form-check-input"
            name="legal"
            id="legal2"
            v-model="form.legal"
            required
          />
          <label class="form-check-label" for="legal"
            >I accept the privacy policies</label
          >
          <field-messages name="legal" show="$touched">
            <div class="ok-msg">Correct!</div>
            <div slot="required" class="error-msg">
              Accepting privacy policies is required
            </div>
          </field-messages>
        </validate>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </vue-form>
    <pre>{{ formstate.$valid }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  created() {
    this.$store.dispatch("defineActiveTabAction", 1);
  },
  methods: {
    onSubmit() {
      if (this.formstate.$valid) {
        this.$store
          .dispatch("addUserAction", this.form)
          .then(() => this.$store.dispatch("getUsersAction"))
          .finally(() => alert("usuario creado"));

        this.form = {
          name: "",
          surname: "",
          email: "",
          password: "",
          document: "",
          legal: false,
          extra: "",
        };
        return;
      }
    },
    checkEmail(value) {
      return this.getUsers.find((u) => u.email === value) ? false : true;
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

.ok-msg {
  color: green;
}

.error-msg {
  color: red;
}
</style>
