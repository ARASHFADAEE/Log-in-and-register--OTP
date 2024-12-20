<?php

class sms
{
    private $username;
    private $password;


    public function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    public function send_sms($mobile, $pattern, ...$params)
    {
        ini_set("soap.wsdl_cache_enabled", "0");
        $sms = new SoapClient("http://api.payamak-panel.com/post/Send.asmx?wsdl", array("encoding" => "UTF-8"));
        $params_text = implode(";", $params);
        $data = array(
            "username" => "$this->username",
            "password" => "$this->password",
            "text" => "@{$pattern}@$params_text",
            "to" => "$mobile"
        );
        $send_Result = $sms->SendByBaseNumber3($data)->SendByBaseNumber3Result;
        echo $send_Result;
    }
}


$smsnow = new sms('09140065379', '0OS7#');


