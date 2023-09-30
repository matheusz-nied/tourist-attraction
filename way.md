- Instalando typescript: `$ yarn add -D typescript`
- Adicionando types node: `$ yarn add -D @types/node`
- Criando arquivo configuração Typescript: `$ yarn tsc --init`
- Instalando ts-node-dev para desenvolvimento: `$ yarn add -D ts-node-dev`
- Instalando Jest: `$ yarn add -D jest ts-jest @types/jest`
- Criar arquivo configuração jest
- Instalar Express
- Utilizando Path Mapping: Dentro do `tsconfig.json` acrescente

```js
{
  "compilersOptions": {
    "baseUrl": ".",
    "paths": {
      "@controllers/*": ["./src/controllers/*"],
      "@models/*": ["./src/models/*"],
      "@config/*": ["./src/config/*"],
      "@utils/*": ["./src/utils/*"]
    }
  }
}
```

O baseUrl é o ponto de partida, considerando o local do arquivo tsconfig.json dentro do projeto.

O paths é um objeto que contém o nome do módulo como propriedade e um array como valor que aponta o caminho/endereço do arquivo ou pasta. Agora com tudo configurado:

```js
import { User } from "@models/users/User";
```

Se executarmos vamos obter um erro, porque o ts-node-dev ou ts-node não consegue resolver os caminhos informados no tsconfig.json.
Vamos instalar uma biblioteca que resolve isso: `yarn add tsconfig-paths -D`. 
E no arquivo package.json configuramos o script: ` "dev": "ts-node-dev -r tsconfig-paths/register src/server.ts"`


- Instalar ejs e depois configura-lo: `app.set('view engine', 'ejs');`