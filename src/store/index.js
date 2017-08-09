import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';
import SunCalc from '@/plugins/sunCalc';

Vue.use(Vuex);

const state = {
    now: null,
    today: 'Sun Jan 10 1982',
    sunTimes: {},
    moonTimes: {},
    moonPhase: {},
    userLat: 41.6,
    userLng: 2.8,
};

const mutations = {
    UPDATE_USER_COORDS(currentState, coords) {
        currentState.userLat = coords.latitude;
        currentState.userLng = coords.longitude;
    },
    UPDATE_TODAY(currentState, time) {
        const now = time || new Date();
        currentState.now = now;
        currentState.today = now.toDateString();
        currentState.sunTimes = SunCalc.getTimes(now, currentState.userLat, currentState.userLng);
        currentState.moonTimes = SunCalc.getMoonTimes(
            now,
            currentState.userLat,
            currentState.userLng,
        );
        currentState.moonPhase = SunCalc.getMoonIllumination(now).phase;
    },
};

const actions = {
    setUserCoords(currentState, coords) {
        store.commit('UPDATE_USER_COORDS', coords);
        store.commit('UPDATE_TODAY');
    },
};

const getters = {
    yearProgressInDegrees: (currentState) => {
        const yearEnd = new Date(`1/1/${currentState.now.getFullYear() + 1}`);
        const yearStart = new Date(`1/1/${currentState.now.getFullYear()}`);
        return ((currentState.now - yearStart) / (yearEnd - yearStart)) * 360;
    },
    dayLength: currentState => currentState.sunTimes.sunset - currentState.sunTimes.sunrise,
    moonLength: (currentState) => {
        const riseTime = currentState.moonTimes.rise;
        const setTime = currentState.moonTimes.set;
        if (riseTime > setTime) {
            return setTime - riseTime;
        }

        return setTime - riseTime;
    },
    moonPhasePath: (currentState) => {
        // From https://github.com/tingletech/moon-phase
        const phase = currentState.moonPhase;
        let sweep = [];
        let mag;
        if (phase <= 0.25) {
            sweep = [1, 0];
            mag = 20 - (20 * phase * 4);
        } else if (phase <= 0.5) {
            sweep = [0, 0];
            mag = 20 * (phase - 0.25) * 4;
        } else if (phase <= 0.75) {
            sweep = [1, 1];
            mag = 20 - (20 * (phase - 0.5) * 4);
        } else if (phase <= 1) {
            sweep = [0, 1];
            mag = 20 * (phase - 0.75) * 4;
        }

        return `m100,0 a${mag},20 0 1,${sweep[0]} 0,150 a20,20 0 1,${sweep[1]} 0,-150`;
    },
    sunRotation: (currentState) => {
        const currentPosition = currentState.sunTimes.sunset - currentState.now;
        const currentDegrees =
            180 - ((currentPosition / store.getters.dayLength) * 180);
        return currentDegrees;
    },
    moonRotation: (currentState) => {
        let currentDegrees;

        if (currentState.moonTimes.alwaysDown) {
            currentDegrees = -90;
        } else {
            const currentPosition = currentState.moonTimes.set - currentState.now;
            currentDegrees =
                180 - ((currentPosition / store.getters.moonLength) * 180);
        }
        return currentDegrees;
    },
    currentHourClass: (currentState) => {
        const hour = currentState.now.getHours();
        return hour < 10 ? `h-0${hour}` : `h-${hour}`;
    },
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [createPersistedState(), createLogger()],
});

export default store;
