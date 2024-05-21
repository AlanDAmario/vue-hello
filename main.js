'use strict';
console.log(Vue);

const { createApp } = Vue;

// createApp({
//     data(){
//         return {

//         }
//     }
// }).mount('#app')
const optionObj = {
    data() {
        return {
            title: 'Hello world!',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAedMAQCpaUc18fV8hjm7Ym-N9gJU5d4QV4g&s'
        };
    },
};
const app = createApp(optionObj);
app.mount('#app')