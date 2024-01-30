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
            //console.log(data);
            const item = {
                object: this.toDoList,
            }

            axios.post('server.php', item, {
                headers: {'Content-type': 'multipart/form-data'}
            }).then((response) => {
                this.newListItem = '';
                this.toDoList = response.data;
                //console.log(response.data);
            })

            //console.log(this.toDoList);
        },
        addListItem(){
            if(this.newListItem != ''){
                objNewItem = {
                    "task": this.newListItem,
                    "status": false,
                };
                this.toDoList.push(objNewItem);
                this.updateJson();
            }
            //console.log(this.toDoList);
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