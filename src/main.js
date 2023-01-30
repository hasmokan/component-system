import { createApp } from "vue";
import App from "./App.vue";
import emuiButton from "./components/button.vue";
var app = createApp(App);

app.mount("#app");
app.component(emuiButton.name, emuiButton);
