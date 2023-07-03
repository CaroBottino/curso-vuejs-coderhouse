<template>
    <div>
        <nav>
            <a id="profile" href="/profile">My Profile</a>
            <a v-if="admin" id="admin" href="/admin">Admin</a>
        </nav>

        <nav>
            <a id="user" href="/profile">My Profile</a>
            <ul v-show="shouldShowDropdown" id="user-dropdown">
                <!-- dropdown content -->
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "CondRenderComp",
    data() {
        return {
            admin: false,
            shouldShowDropdown: false,
        };
    },
};
</script>
