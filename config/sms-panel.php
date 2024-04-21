<?php

//rahpayam
$api_rahpayam='87664e872d5684f78e403b40f13fc3df';
$pattern_rahpayam=6732;
class verify
{
    private $apikey;
    private $template_id;

    public function __construct($apikey, $template_id)
    {

        $this->apikey = $apikey;
        $this->template_id = $template_id;
    }




    public function send_otp($otp,$phone)
    {
        $apiKey = $this->apikey;
        $params = [
            "mobile" => "+98$phone",
            "method" => "sms",
            "templateID" => $this->template_id,
            "code" => "$otp" , //
        ];
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.msgway.com/send',
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POSTFIELDS => json_encode($params),
            CURLOPT_HTTPHEADER => array(
                'apiKey: ' . $apiKey,
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
    }
}

