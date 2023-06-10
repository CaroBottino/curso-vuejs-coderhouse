<template>
  <div>
    <figure>
      <blockquote class="blockquote">
        <p>{{ title }}</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        <cite title="Source Title">por {{ name }}</cite>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    title: String,
    name: String,
  },
};
</script>
