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
| Cannot find module 'react/lib/ReactComponentTreeHook' from 'ReactDebugTool.js' | tenemos q limpiar la cache y volver a instalar otra vez y cerrar y abrir el editor de nuevo ¿?¿?¿? **Importante:** en el tsconfig.json, en compilerOptions, meter los tipos de ts-jest y jest|
| No se encuentra el nombre 'test'. | ídem |



> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Jest Get Started]: <https://facebook.github.io/jest/docs/en/getting-started.html>
   [TS Jest]: <https://github.com/kulshekhar/ts-jest>
   [Test React Component Jest + Enzyme]: <https://www.sitepoint.com/test-react-components-jest/>
   [Enzyme adapters]: <https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
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
