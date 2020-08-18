#!/bin/bash

read -p "Escreva um caminho de arquivo/diretório:" CAMINHO

if [ -d "$CAMINHO" ]
then
    echo "$CAMINHO é um diretorio"

elif [ -f "$CAMINHO" ]
then
    echo "$CAMINHO é um arquivo comum"

else
    echo "$CAMINHO é outra coisa"
fi

ls -l "$CAMINHO"