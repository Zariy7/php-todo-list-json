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
        updateTask(listItem){
            this.toDoList.forEach(elem => {
                if(listItem.task == elem.task){
                    elem.status = !elem.status;
                }
            });

            this.updateJson();
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
        removeListItem(listItem){
            this.toDoList.forEach(elem => {
                if(listItem.task == elem.task){
                    let pos = this.toDoList.indexOf(elem);
                    this.toDoList.splice(pos, 1);
                }
            });

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