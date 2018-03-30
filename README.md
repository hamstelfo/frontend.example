# frontend.example
React+Redux+Typescript+Jest

Pasos a seguir.
  
  - Inicialización
  - Javscript + Jest
  - Typescript + Jest
  - 

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Initialization

### Visual Studio Code
  - Instalar Visual Studio Code
  - Instalamos las extensiones Npm y Npm Intellisense
  - Instalamos la extensión vscode-icons (opcional)
  - Instalamos la extensión zenburn (opcional)
  - Abrir Ver > Terminal integrado (ctrl+ñ)

### Git
  - Preparamos el .gitignore
  - Drag and drop markdown and HTML files into Dillinger

### Sistema de ficheros
  - Creamos una carpeta vacía. La podemos ubicar donde queramos, ya que vamos a usar el webserver de webpack, no es necesario xampp ni winNMP, ni ningún otro servidor.
  - javascript.jest
  - typescript.jest

## Javascript + Jest
El propósito de este ejemplo es empezar a familiarizarnos con Jest. Vamos símplemente a usar Javascript, así que de momento no será necesario utilizar Webpack.

  - En la carpeta javascript.jest vamos a seguir los pasos básicos de [Jest Get Started]
  - Tan sólo comentar que la nomenclatura es importante sum.js > sum.test.js, para que al hacer **npm test**, Jest sepa qué fichero testear automáticamente.

## Typescript + Jest

  - Seguimos las instrucciones de [TS Jest].
  - Nos vamos a la carpeta typescript.jest, donde no tenemos nada inicialmente, así que debemos usar **npm init** y luego **npm install --save-dev jest ts-jest @types/jest** para instalar jest aquí también, junto cont ts-jest y los tipos.
  - Configuramos el package.json como dice en el ejemplo.
  - Nos traemos nuestros ficheros js del ejemplo anterior y los renombramos a tsx.
  - Transformamos sum.ts en Typescript. y vemos que obtenemos 3 errores en sum.test.ts. Mucho ojo con la carpeta node_modules, porque aparece vacía. Esto puede ser debido a que no está definido como entorno de desarrollo y npm borra pensando q es en producción.

| Error | Solución |
| ------ | ------ |
| No se encuentra el nombre 'require'.  | "npm install @types/node --save-dev" y crear tsconfig.json|
| No se encuentra el nombre 'test'. | tenemos q limpiar la cache y volver a instalar otra vez y cerrar y abrir el editor de nuevo ¿?¿?¿? **Importante:** en el tsconfig.json, en compilerOptions, meter los tipos de ts-jest y jest|
| No se encuentra el nombre 'test'. | ídem |
- Ahora, al intentar hacer **npm test**

| Error | Solución |
| ------ | ------ |
| Cannot find module 'typescript'. | npm install typescript |

## React + Typescript + Jest
Vamos a crearnos un componente lo más básico posible.
Instalamos las dependencias (podemos tener abierto en package.json mientras instalamos y vemos cómo se van agregando las dependencias en él):
```sh
$ cd react.typescript.jest
$ npm init
$ npm install react
$ npm install react-dom
$ npm i react-addons-shallow-compare
$ npm i react-virtualized --save
$ npm i @types/react-virtualized --save-dev
$ npm install --save-dev jest ts-jest @types/jest
$ npm install --save-dev react-addons-test-utils enzyme
$ npm i --save-dev enzyme enzyme-adapter-react-16
$ npm cache clear --force
$ npm install
```
  - Importante en el tsconfig.json, en compilerOptions, meter los tipos de ts-jest y jest
  - Importante la primera letra del componente en mayñuscula.
  - No olvidar meterle esto a package.json
 ```sh
"jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
```
  - Seguimos las instrucciones de [Test React Component Jest + Enzyme] ( a mitad del documento, donde dice **Testing React Components**). 
  - Trabajamos con "mount" de Enzyme, que nos permite renderizar el componente SIN ejecutarlo en el navegador.


| Error | Solución |
| ------ | ------ |
| Enzyme expects an adapter to be configured, but found none  | Para solucionar el tema de los adapters: [Enzyme adapters].|
| Cannot find module 'react/lib/ReactComponentTreeHook' from 'ReactDebugTool.js' | npm install react-dom@16.2.0 --save|
| TypeError: Cannot read property 'configure' of undefined | "import { mount, configure } from 'enzyme';" y "configure({ adapter: new Adapter() });"  |
| TypeError: enzyme_adapter_react_16_1.default is not a constructor | Comentar "import Adapter from 'enzyme-adapter-react-16';" y reemplazar por "const Adapter = require("enzyme-adapter-react-16");"  |

## Redux + React + Typescript + Jest
Cogemos como muestra el proyecto anterior, y sobre él vamos a generar nuestra capa Redux.
```sh
$ cd redux.react.typescript.jest
$ npm install
$ npm test 
```
Podemos comprobar que todo sigue funcionando.. Ahora vamos a meterle Redux.
```sh
$ npm install redux react-redux redux-logger redux-thunk redux-promise-middleware -S
```
Ahora vamos a refactorizar para poder trabajar con Redux.
Vamos a agregar esto para que las pruebas se realicen cada vez q se cambia algo:
```sh
{
  ...
  "scripts": {
    ...
    "test": "jest",
    "test:watch": "npm test -- --watch"
  },
  ...
}
```
Y nos fijamos en [Redux tests] para crear nuestros tests.


## Publish with Webpack + Redux + React + Typescript + Jest

## Export component in npm + Redux + React + Typescript + Jest





> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.







[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Jest Get Started]: <https://facebook.github.io/jest/docs/en/getting-started.html>
   [TS Jest]: <https://github.com/kulshekhar/ts-jest>
   [Test React Component Jest + Enzyme]: <https://www.sitepoint.com/test-react-components-jest/>
   [Enzyme adapters]: <https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16>
   [Redux tests]: <https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
