<?php 
    $toDolist = file_get_contents('list.json');
    $list = json_decode($toDolist, true);

    if(isset($_POST['object'])){
        $item = $_POST['object'];
        array_push($list, $item);
        file_put_contents('list.json', json_encode($list));
    }

    header('Content-type: application/json');
    echo json_encode($list);
?>