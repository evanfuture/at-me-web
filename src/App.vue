<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style>
html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-size: 2rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    min-height: 100vh;
    background: hsla(141, 35%, 35%, 0.58);
}
</style>
