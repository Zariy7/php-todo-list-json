const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList: [],
            newListItem: '',
        }
    },
    methods: {
        updateJson(){
            let data = {
                "task": this.newListItem,
                "status": false,
            }

            //console.log(data);

            axios.post('server.php', data, {
                headers: {'Content-type': 'multipart/form-data'}
            }).then((response) => {
                this.newListItem = '';
                this.toDoList = response.data;
                //console.log(response.data);
            })
        },
        addListItem(){
            if(this.newListItem != ''){
                objNewItem = {
                    "task": this.newListItem,
                    "status": false,
                };
                this.toDoList.push(objNewItem);
            }

            console.log(this.toDoList);
            this.updateJson();
        },
        getList(){
            axios.get('server.php').then((response) =>{
                //console.log(response.data);
                this.toDoList = response.data;
            });
        }
    },
    created(){
        this.getList();
    },
}).mount('#app');