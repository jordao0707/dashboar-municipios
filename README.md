# dashboar-municipio

* Entre no arquivo master e rode:	
  ```sh 	
  yarn install 	
  ```  	
* Instale o json-server globalmente. OBS: use sudo ou execute com administrador.

  ```sh	
  npm install json-server -g	
  ```	
* Rode o seguinte comando dentro da pasta src/DataBase:	
  ```sh	
  json-server --watch db.json --port 3001	
  ```	
* Inicie o servidor node.
  ```sh	
  yarn start	
  ```	
* db.json é o arquivo com os dados que abastecem a página. 	
  Definimos a porta 3001 pois o node roda na por 3000 que também é a padrão do json-server	
