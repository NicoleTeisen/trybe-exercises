#!/bin/bash

CAMINHO="/home/nicole/Documentos/Trybe"

if [ -e "$CAMINHO" ]
then
    echo "O caminho $CAMINHO está habilitado!"
else
    echo "Você NÃO foi autorizado a editar $CAMINHO"
fi

if [ -w "$CAMINHO" ]
then
    echo "Você tem permissão para editar $CAMINHO"
else
    echo "Você NÃO foi autorizado a editar $CAMINHO"
fi