<template>
    <div class="sunContainer">
        <div class="sunDisc" :style="sunRotation()">
            <svg class="sun" viewBox="0 0 580 580" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <circle id="a" cx="285" cy="285" r="225" />
                </defs>
                <g transform="translate(5 5)" fill="none" fill-rule="evenodd">
                    <circle fill-opacity=".1" fill="#FFFDF2" cx="285" cy="285" r="285" />
                    <circle fill-opacity=".1" fill="#FFFDF2" cx="285" cy="285" r="265" />
                    <circle fill-opacity=".1" fill="#FFFDF2" cx="285" cy="285" r="245" />
                    <use fill="#FFDB5E" xlink:href="#a" />
                    <circle stroke="#FFEC90" stroke-width="14" cx="285" cy="285" r="218" />
                </g>
            </svg>

            <div class="sunPath"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sunRotation() {
                return `transform: rotate(${this.$store.getters.sunRotation}deg)`;
            },
        };
    },
};
</script>

<style>
.sunDisc {
    position: absolute;
}

.sunPath {
    width: calc(100vw - 40px);
    height: calc(100vw - 40px);
    border: 4px dashed rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    margin: 13px;
}

.sun {
    position: absolute;
    transform: translateY(-50%);
    width: 30px;
    top: 50%;
}
</style>
