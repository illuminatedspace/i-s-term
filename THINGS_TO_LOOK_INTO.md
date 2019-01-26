# Things to Look Into

## 1/19/2019
### WHERE IS THIS EXTRA SPACE COMING FROM?!?!?!

There is a space under the text input component in the Main component but it's not margin or padding?

### Graph QL Conventions

- how many Static Queries are to many?
- What is a Static Query

## 1/12/2019

### Fragments

- As seen in layout.js
- `<> </>`

> Fragments let you group a list of children without adding extra nodes to the DOM.
https://reactjs.org/docs/fragments.html

### Structure for Global Styles with Styled Components

- Where to put global styles instead of `layout.css`
- Styled Components/Theming is a possibility

https://www.styled-components.com/
Themes definitely seems like the way to go.
You wrap a single element with a theme and then every decendent component has
access to it through props `props.theme`.
There's A Higher Order Component that can add the theme to the wrapped component.
https://www.styled-components.com/docs/advanced#getting-the-theme-without-styled-components

And you can use nested themes if you want:
https://www.styled-components.com/docs/advanced#function-themes

## Notes
### Testing
Jest plugin for styled-components
https://www.styled-components.com/docs/tooling#stylelint

### Linting
#### Linter for Styled Components Template Literal-ed CSS
https://www.styled-components.com/docs/tooling#stylelint

### Babel Configs
#### Styled Components Babel Plugin
https://www.styled-components.com/docs/tooling#babel-plugin
* Better Template Literal Transpilation
* Minification
* Dead code elimination

### Security
#### Protecting against CSS injection with Styled Components
https://www.styled-components.com/docs/advanced#function-themes
They recommend a polyfill babel plugin
