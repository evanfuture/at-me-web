<template>
    <div class="page">
        <timeHeader></timeHeader>
        <main>
            <helper></helper>
        </main>
    </div>
</template>

<script>
import TimeHeader from '@/components/TimeHeader';
import Helper from '@/components/Helper';

export default {
    components: {
        TimeHeader,
        Helper,
    },
    created() {
        // navigator.geolocation.getCurrentPosition(
        //   position => {
        //       this.$store.dispatch('setUserCoords', position.coords);
        //   }, error => {
        const coords = { latitude: 41.6932586, longitude: 2.8233097 };
        this.$store.dispatch('setUserCoords', coords);
        //   }
        // );
    },
};
</script>

<style>
.page {
    min-height: 100vh;
}

main {
    position: relative;
    padding: 20px;
    min-height: 300px;
}
</style>
