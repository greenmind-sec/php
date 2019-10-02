# Modo de usar

## Subindo infraestrutura

### Requisitos
- Docker
- Docker-compose

### Subindo aplicação
No diretorio do projeto vamos realizar o comando para subir o container e criar um volume dentro do diretorio do nginx.
```sh
sudo docker container run -it --rm -p420:8080 -v"${PWD}:/var/www/html" trafex/alpine-nginx-php7
```
