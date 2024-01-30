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
            newListItem: '',
        }
    },
    methods: {
        addListItem(){
            if(this.newListItem != ''){
                this.toDoList.push(this.newListItem);
            }
        }
    },
    created(){

    },
}).mount('#app');