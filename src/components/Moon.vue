<template>
    <div class="moonContainer">
        <div class="moonDisc" :style="moonRotation()">
            <svg class="moon" :style="moonRotation(true)" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <circle id="moon" cx="98" cy="98" r="75" />
                    <path id="moonface" :d="moonPhase()" transform="translate(0 23)"></path>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(2 2)">
                        <circle fill-opacity=".1" fill="#000" cx="98" cy="98" r="98" />
                        <circle fill-opacity=".1" fill="#000" cx="98" cy="98" r="91.1" />
                        <circle fill-opacity=".1" fill="#000" cx="98" cy="98" r="84.2" />
                        <use fill="#B3B3AF" xlink:href="#moon" />
                        <use fill="#DFDFDB" xlink:href="#moonface" />
                    </g>
                    <g transform="translate(34 33)" fill="#B3B3AF">
                        <ellipse cx="69.5" cy="30.1" rx="12.5" ry="10.8" />
                        <ellipse transform="rotate(-22 96.302 39.703)" cx="96.3" cy="39.7" rx="8.4" ry="13.9" />
                        <ellipse cx="119.3" cy="42.1" rx="6.7" ry="7.7" />
                        <ellipse cx="113.1" cy="63.3" rx="4.3" ry="4.5" />
                        <ellipse transform="rotate(-26 38.358 13.234)" cx="38.4" cy="13.2" rx="21.3" ry="4.3" />
                        <ellipse cx="33.3" cy="45.9" rx="18.9" ry="15.6" />
                        <ellipse transform="rotate(-9 9.63 74.71)" cx="9.6" cy="74.7" rx="6.7" ry="17.4" />
                        <ellipse transform="rotate(7 31.586 93.328)" cx="31.6" cy="93.3" rx="9.6" ry="18" />
                        <ellipse cx="50" cy="72.2" rx="5" ry="4.5" />
                        <ellipse transform="rotate(20 9.785 45.72)" cx="9.8" cy="45.7" rx="1.9" ry="4.8" />
                        <ellipse cx="20.4" cy="28.2" rx="4.3" ry="3.1" />
                        <ellipse cx="52.5" cy="114.3" rx="5.5" ry="6.7" />
                        <ellipse cx="68.3" cy="101.6" rx="8.2" ry="8.1" />
                        <ellipse transform="rotate(29 104.714 16.672)" cx="104.7" cy="16.7" rx="8.2" ry="6.4" />
                    </g>
                </g>
            </svg>

            <div class="moonPath"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moonRotation(reverse) {
                return `transform: rotate(${reverse ? '-' : ''}${this.$store.getters.moonRotation}deg)`;
            },
            moonPhase() {
                return this.$store.getters.moonPhasePath;
            },
        };
    },
};
</script>

<style>
.moonContainer {
    position: absolute;
    width: calc(80vw - 40px);
    height: calc(80vw - 40px);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 100%;
}
.moonDisc {
    position: absolute;
}

.moonPath {
    width: calc(80vw - 40px);
    height: calc(80vw - 40px);
    border: 4px dashed rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin: 13px;
}

.moon {
    position: absolute;
    transform: translateY(-50%);
    width: 30px;
    top: 50%;
}
</style>
