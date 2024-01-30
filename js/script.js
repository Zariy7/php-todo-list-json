const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList: [],
            newListItem: '',
        }
    },
    methods: {
        updateJson(data){
            //console.log(data);
            const item = {
                object: data,
            }

            axios.post('server.php', item, {
                headers: {'Content-type': 'multipart/form-data'}
            }).then((response) => {
                this.newListItem = '';
                this.toDoList = response.data;
                //console.log(response.data);
            })
        },
        updateTask(listItem){
            this.toDoList.forEach(elem => {
                if(listItem.task == elem.task){
                    elem.status = !elem.status;
                }
            });
        },
        addListItem(){
            if(this.newListItem != ''){
                objNewItem = {
                    "task": this.newListItem,
                    "status": false,
                };
                this.toDoList.push(objNewItem);
                this.updateJson(objNewItem);
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