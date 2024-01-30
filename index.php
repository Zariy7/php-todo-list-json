<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    </head>
    <body>
        <div id="app">
            <div class="container">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <h1 class="text-center">
                            ToDo List
                        </h1>
                        <ul class="list-group">
                            <li v-for='item, index in toDoList' :key="index" class="list-group-item">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        </div>
        <script src="./js/script.js" type="text/javascript"></script>
    </body>
</html>