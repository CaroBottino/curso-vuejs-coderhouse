export const photosModule = {
    namespaced: true,
    state: {
        photos: []
    },
    getters: {
        getPhotosByAlbum: (state) => (albumId) => {
            return state.photos.filter((photo) => photo.albumId === albumId);
        },
    },
    mutations: {
        setPhotos: (state, photos) => {
            state.photos = photos;
        }
    },
    actions: {
        getPhotos: (context) => {
            fetch("https://jsonplaceholder.typicode.com/photos")
                .then((res) => res.json())
                .then((photos) => context.commit('setPhotos', photos));
        }
    },
};
