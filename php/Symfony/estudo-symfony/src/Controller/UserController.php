<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController 
{
    /**
     * @Route("/", methods={"GET})
     */
    public function index() : Response
    {
        $response = new Response();
        $response->setContent("Implementando formulario de cadastro");

        return $response;
    }
    /**
     * @Route("/salvar", methods={"POST})
     */
    public function salvar() : Response
    {
        $response = new Response();
        $response->setContent("Implementando gravação ao banco de cadastro");

        return $response;
    }
     
}