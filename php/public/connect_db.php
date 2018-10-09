<?php
    class db;
    {
        public $host = 'localhost';//定义默认连接方式
        public $account = 'root';  //定义默认用户名
        public $pass = ''; //定义默认密码
        public $db_name = 'user_inform';//定义默认的数据库名
        public $port = '3306'; 

        //两个参数： sql语句      判断返回1查询或是增删改的返回结果

        public function Query($sql, $type = 1)
        {
            //造一个连接对象
            $db = new mysqli($this->host,$this->account,$this->pass,$this->db_name,$this->port);
            $db -> query("SET CHARACTER SET 'utf8'");   //读库
            $db -> query("SET NAMES 'utf8'")   // 写库
            $r = $db -> query($sql);

            if($type == "1"){
                $array = array();
                while($row = $r -> fetch_assoc()){
                    array_push($array, $row);
                }
                return $array;   //查询语句，返回数组
            }else if($type == "2"){
                return $r -> fetch_assoc(); //查询语句， 返回关联数组， 一条
            }
            else{
                return $r;
            }
        }
    }

?>