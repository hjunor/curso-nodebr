## --- Postgres
docker run \
    --name postgres \
    -e POSTGRES_USER=heberthjunor \
    -e POSTGRES_PASSWORD=5df4k8t2k9 \
    -e POSTGRES_DB=heros \
    -p 5432:5432 \
    -d \
    postgres
"Server = postgres" => Criacão da imagem.



docker ps => listar.

docker exec -it postgres /bin/bash => entra na execução.

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## --- MongoDB
docker run \ 
    --name mongodb \
    -p 5432:5432 \
    -e MONGO_INITDB_ROOT_USERNAME=adimin \
    -e MONGO_INITDB_PASSWORD=5df4k8t2k9 \
    -d \
    mongo:4

docker run \
    --name mongoclinte \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

# --- Create Users

docker exec -it mongodb \
    mongo --host localhost -u admin -p  senhaadmin --authenticationData admin \
    --eval "db.getSiblinDB('heros').createUser({user:'junor' , pwd:'5df4k8t2k9', roles:[{ role:'readWrite', db:'heros'}]})"

    newgrp docker >>> is comander this terminal