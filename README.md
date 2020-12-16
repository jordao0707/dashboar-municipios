# dashboar-municipios


* Vá entre no arquivo master e rode:
  ```sh 
  yarn install 
  ```  
* Instale o json-server globalmente
 
 ```sh
  npm install json-server -g
  ```
* Inicie o servidor node
  ```sh
  yarn start
  ```
* Rode o comando seguinte comando dentro da pasta src/DataBase:
  ```sh
   json-server --watch db.json --port 3001
   ```
* db.json é o arquivo com os dados que abastecem a page. 
  Definimos a porta 3001 pois o node roda na por 3000 que também é a padrão do json-server

