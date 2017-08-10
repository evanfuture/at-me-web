<template>
    <div class="helper">
        <range-slider class="slider" v-model.lazy="value" :min="min" :max="max" :step="step"></range-slider>

        <div>
            Now:
            <input class="value" type="number" v-model="value">
        </div>

        <p>Day Length: {{dayLength()}}</p>
    </div>
</template>

<script>
import RangeSlider from 'vue-range-slider';
import 'vue-range-slider/dist/vue-range-slider.css';

export default {
    name: 'helper',
    data() {
        const start = new Date().setHours(0, 0, 0, 0);
        const end = new Date().setHours(23, 59, 59, 999);
        const fullDay = end - start;

        return {
            value: this.$store.state.now,
            min: start,
            max: end,
            step: fullDay / 24,
            dayLength() {
                return this.$store.state.sunTimes;
            },
        };
    },
    watch: {
        value(newValue) {
            this.$store.commit('UPDATE_TODAY', new Date(newValue));
        },
    },
    components: {
        RangeSlider,
    },
};
</script>

<style>
.helper {
    background: rgba(0, 0, 0, 0.3);
    width: 50%;
    height: auto;
    padding: 10px;
    font-size: 10px;
    color: white;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
}
</style>
