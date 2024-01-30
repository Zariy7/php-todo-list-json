const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList: [
                "AAA",
                "BBB",
                "CCC",
                "DDD",
                "EEE",
            ],
        }
    }
}).mount('#app');