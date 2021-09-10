<?php

require "vendor/autoload.php";
// composer init
// composer require wead/digital-cep

use Wead\DigitalCep\Search;

$search = new Search();

print_r($search->getAddressFromZipcode('11335000'));
