<?php 
    $toDolist = file_get_contents('list.json');
    $list = json_decode($toDolist, true);

    if(isset($_POST['object'])){
        /* foreach($item as $_POST['object']){
            $item["status"] = parse($item["status"]);
        } */
        $list = $_POST['object'];
        file_put_contents('list.json', json_encode($list));
    }
    
    header('Content-type: application/json');
    echo json_encode($list);
?>