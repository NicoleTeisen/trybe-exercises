#!/bin/bash

CAMINHO=$1

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