<template>
    <header class="timeHeader" :class="hourClass()">
        <sun></sun>
        <moon></moon>
        <earth></earth>
    </header>
</template>

<script>
import Sun from '@/components/Sun';
import Moon from '@/components/Moon';
import Earth from '@/components/Earth';

export default {
    components: {
        Sun,
        Moon,
        Earth,
    },
    created() {
        this.$store.commit('UPDATE_TODAY');

        setInterval(() => {
            this.$store.commit('UPDATE_TODAY');
        }, 60000);
    },
    data() {
        return {
            hourClass() {
                return this.$store.getters.currentHourClass;
            },
        };
    },
    methods: {
        cancelAutoUpdate() {
            clearInterval(this.timer);
        },
    },
    beforeDestroy() {
        this.cancelAutoUpdate();
    },
};
</script>

<style lang="scss">
.timeHeader {
    background-color: hsla(216, 98%, 18%, 1);
    height: 50vw;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:before {
        content: '';
        background-image: linear-gradient(to bottom,
        hsla(216, 98%, 18%, 1) 0%, hsla(206, 100%, 7%, 1) 100%);
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        z-index: -1;
        transition: opacity 0.45s;
    }

    &.h-00 {
        background-image: linear-gradient(to bottom,
        hsla(216, 98%, 18%, 1) 0%, hsla(206, 100%, 7%, 1) 100%);
    }

    &.h-01 {
        background-image: linear-gradient(to bottom,
        hsla(210, 100%, 22%, 1) 0%, hsla(206, 100%, 7%, 1) 100%);
    }

    &.h-02 {
        background-image: linear-gradient(to bottom,
        hsla(210, 100%, 22%, 1) 0%, hsla(206, 100%, 7%, 1) 100%);
    }

    &.h-03 {
        background-image: linear-gradient(to bottom,
        hsla(205, 100%, 22%, 1) 0%, hsla(207, 100%, 8%, 1) 100%);
    }

    &.h-04 {
        background-image: linear-gradient(to bottom,
        hsla(205, 100%, 22%, 1) 0%, hsla(207, 96%, 10%, 1) 100%);
    }

    &.h-05 {
        background-image: linear-gradient(to bottom,
        hsla(198, 99%, 29%, 1) 0%, hsla(207, 100%, 8%, 1) 100%);
    }

    &.h-06 {
        background-image: linear-gradient(to bottom,
        hsla(198, 92%, 33%, 1) 0%, hsla(204, 89%, 15%, 1) 100%);
    }

    &.h-07 {
        background-image: linear-gradient(to bottom,
        hsla(191, 83%, 41%, 1) 0%, hsla(197, 88%, 23%, 1) 100%);
    }

    &.h-08 {
        background-image: linear-gradient(to bottom,
        hsla(175, 53%, 64%, 1) 0%, hsla(193, 79%, 36%, 1) 100%);
    }

    &.h-09 {
        background-image: linear-gradient(to bottom,
        hsla(59, 61%, 84%, 1) 0%, hsla(179, 54%, 60%, 1) 100%);
    }

    &.h-10 {
        background-image: linear-gradient(to bottom,
        hsla(50, 99%, 66%, 1) 0%, hsla(156, 47%, 75%, 1) 100%);
    }

    &.h-11 {
        background-image: linear-gradient(to bottom,
        hsla(40, 98%, 66%, 1) 0%, hsla(63, 72%, 75%, 1) 100%);
    }

    &.h-12 {
        background-image: linear-gradient(to bottom,
        hsla(25, 100%, 72%, 1) 0%, hsla(49, 100%, 70%, 1) 100%);
    }

    &.h-13 {
        background-image: linear-gradient(to bottom,
        hsla(28, 98%, 67%, 1) 0%, hsla(49, 100%, 70%, 1) 100%);
    }

    &.h-14 {
        background-image: linear-gradient(to bottom,
        hsla(25, 98%, 67%, 1) 0%, hsla(49, 100%, 70%, 1) 100%);
    }

    &.h-15 {
        background-image: linear-gradient(to bottom,
        hsla(21, 86%, 61%, 1) 0%, hsla(43, 100%, 70%, 1) 100%);
    }

    &.h-16 {
        background-image: linear-gradient(to bottom,
        hsla(351, 82%, 68%, 1) 0%, hsla(30, 93%, 66%, 1) 100%);
    }

    &.h-17 {
        background-image: linear-gradient(to bottom,
        hsla(330, 51%, 57%, 1) 0%, hsla(13, 86%, 69%, 1) 100%);
    }

    &.h-18 {
        background-image: linear-gradient(to bottom,
        hsla(272, 50%, 34%, 1) 0%, hsla(338, 55%, 60%, 1) 100%);
    }

    &.h-19 {
        background-image: linear-gradient(to bottom,
        hsla(258, 65%, 29%, 1) 0%, hsla(285, 42%, 36%, 1) 100%);
    }

    &.h-20 {
        background-image: linear-gradient(to bottom,
        hsla(253, 66%, 25%, 1) 0%, hsla(264, 58%, 31%, 1) 100%);
    }

    &.h-21 {
        background-image: linear-gradient(to bottom,
        hsla(228, 59%, 24%, 1) 0%, hsla(256, 57%, 29%, 1) 100%);
    }

    &.h-22 {
        background-image: linear-gradient(to bottom,
        hsla(233, 88%, 13%, 1) 0%, hsla(230, 53%, 29%, 1) 100%);
    }

    &.h-23 {
        background-image: linear-gradient(to bottom,
        hsla(233, 88%, 13%, 1) 0%, hsla(216, 98%, 18%, 1) 100%);
    }
}
</style>
