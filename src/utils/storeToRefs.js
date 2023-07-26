import { ref } from 'vue'

export function storeToRefs(store) {
    let storeRefs = {};
    Object.keys(store).forEach((key) => {
        storeRefs[key] = ref(store[key]);
    });
    return storeRefs;
}