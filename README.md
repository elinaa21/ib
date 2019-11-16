This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Начало

## GIT

Для начала работы с проектом, нужно заполучить его. [Подсказки тут](https://git-scm.com/book/ru/v2/GitHub-Внесение-собственного-вклада-в-проекты)Для этого нужно нажать справа-сверху:
```
fork
```

Проект скопируется тебе на учетку, дальше тебе нужно скачать его и вносить изменения.
Лучше всего использовать командную строку. [Подсказки тут](https://git-scm.com/book/ru/v1/Основы-Git-Создание-Git-репозитория) Используй:
```
git clone https://github.com/tvoyoimya/ib
```

В созданной папке проекта изменяй файлы, сохрани, потом пиши:
```
git add *
git commit -m "Здесь сообщение о том, что ты сделал(-а)"
git push
```

## NPM

Когда скачаешь проект, в папке проекта используй:
```
npm install
```
Запускай так:
```
npm start
```
Если выдаёт ошибку, что не может найти модуль, нужно скачать этот модуль с помощью:
```
npm install module_name
```

## Работа с файлами

В папке *img* хранятся картинки
Все интересное в папке *pages*, там содержатся файлы для каждой странички
Страницы разделяются на компоненты, например:
* Header
* FirstScreen
* Features
* Pricing
* Footer

Способы деления на компоненты, названия и проч определяется тобой, суть в том, чтобы было легче ориентироваться в коде
Компоненты помещаются в папку *components*

### Добавление нового компонента

Нужно создать новый файл с следующим содержимым:
```javascript
import React from 'react';
function НазваниеКомпонента (props) {
    return (
        ... Разместите здес свой html ...
    )
}
export default НазваниеКомпонента;

```

Затем нужно добавить созданный компонент в файл страницы:
```javascript
import НазваниеКомпонента from 'components/НазваниеКомпонента.js';
...
< НазваниеКомпонента />
```

### Добавление новой страницы

В папке *pages* нужно создать новый файл с содержимым:
```javascript
import React from 'react';
... Здес происходит импорт компонентов ...
function НазваниеСтранички() {
  return (
    <div>
        ... Здес происходит добавление компонентов ...
    </div>
  );
}

export default НазваниеСтранички;

```

### Добавление пути к странице

В файле *App.js* нужно добавить импорт и строку следующего типа по аналогии с существующими:
```
import Main from './components/НазваниеСтраницы.js';
< Route exact path="/path_to_page" component={ НазваниеСтраницы } />
```
Теперь можно будет зайти на страничку по адресу __localhost:3000/path_to_page__

### Особенности html в jsx

При написании html кода в return'e функции компоненты нужно помнить, про эти особенности:
`class="button button-danger"` -> `className="button button-danger"`
`style="color: red; position: fixed"` -> `style={{"color": "white", "position": "fixed"}}`
`onsubmit` -> `onSubmit`
И другое: [Заголовок html в jsx](https://medium.com/@stasonmars/подробное-руководство-по-jsx-в-react-6f7e4eecdba6)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
