
start ：<br>
npm install <br>
npm start <br>
or<br>
yarn install<br>
yarn start

注意：始终使用大写字母开始组件名称。

React将以小写字母开头的组件视为DOM标签。例如，<div />表示一个HTML div标签，但<Welcome />表示一个组件，并且需要Welcome在范围内。

你可以在这里阅读更多关于这个大会背后的推理。

###构成组件<br>
组件可以在其输出中引用其他组件。这让我们可以对任何细节级别使用相同的组件抽象。一个按钮，一个窗体，一个对话框，一个屏幕：在React应用程序中，所有这些都通常表示为组件。

Props are Read-Only <br>
Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:
```
Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

function sum(a, b) {
  return a + b;
}


In contrast, this function is impure because it changes its own input:

function withdraw(account, amount) {
  account.total -= amount;
}

All React components must act like pure functions with respect to their props.
```