<?php

namespace App\Controller\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class UserController 
{
    /**
    * @Route("/lista", methods={"GET}, name="lista")
    */
    public function lista(): JsonResource
    {
        return new JsonResource(["Implementando lista na Api", 404]);
    }

    /**
    * @Route("/cadastro", methods={"POST}, name="lista")
    */
    public function cadastro(): JsonResource
    {
        return new JsonResource(["Implementando cadastro na Api", 404]);
    }
}