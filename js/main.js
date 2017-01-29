import Vue from "vue";
import {id as MyComponentId} from "components/MyComponent";

new Vue({
    // We don't have to do it this way, I'm just doing this because I can.
    // In the case that we are doing complex template stuff, this won't be
    // so feasible.
    template: `<${MyComponentId}/>`
}).$mount("#theApp");
