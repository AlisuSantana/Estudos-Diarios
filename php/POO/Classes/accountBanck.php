<?php

declare(strict_types=1);

class AccountBank 
{
    private string $bank;
    private string $nameTitle;
    private string $numberAgency;
    private string $numberAccount;
    private float $accountBalance; 

    public function __construct(
        string $bank,
        string $nameTitle,
        string $numberAgency,
        string $numberAccount,
        float $accountBalance
    ) {
        $this->bank = $bank;
        $this->nameTitle = $nameTitle;
        $this->numberAgency = $numberAgency;
        $this->numberAccount = $numberAccount;
        $this->accountBalance = $accountBalance;
    }

    public function getBalance() : string
    {
        $this->accountBalance;
        return "Seu saldo atual é: R$ " . $this->accountBalance;
    }

    public function deposit(float $value) : string
    {
        $this->accountBalance += $value;
        return "Deposito realizado com sucesso! Seu novo saldo é de: R$ " . $this->accountBalance;
    }

    public function withdrawal(float $value) : string
    {
        $this->accountBalance -= $value;
        return "Saque realizado! Seu novo saldo Seu novo saldo é de: R$" . $this->accountBalance;
    }

}