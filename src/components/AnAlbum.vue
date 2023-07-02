<template>
    <div>
        <h1>Al album</h1>

        <label for="albumId">id: </label>
        <input id="albumId" type="number" v-model.number="id" />

        <div>
            <img
                v-for="photo in getPhotosByAlbumId"
                :key="photo.id"
                :src="photo.thumbnailUrl"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "AnAlbum",
    data() {
        return {
            id: 1,
        };
    },
    computed: {
        /*
            no puedo usar ...mapGetters("photos", ["getPhotosByAlbum"]),
            porque no tengo forma de mandar el id a la segunda funcion
        */
        getPhotosByAlbumId() {
            return this.$store.getters["photos/getPhotosByAlbum"](this.id);
        },
    },
    created() {
        this.$store.dispatch("photos/getPhotos");
    },
};
</script>
