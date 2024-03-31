- What is the difference between default export and named export and \* as export?

Default export can export single value or funtion and can be imported using any name of choosing.
With named import we can export multiple values or funtions with specific names from a module.
With \* as syntax we can import all exported values or funtions in single import statement.

- What are react hooks?

React hooks are javascript functions that have pre-written logic behind them.

- Why do we need a useState hook?

useState hook is used to store the variable in the component state. Whenever a state variable is changed the component get rerendered because of Reacts diff algorithm. So, if we have our UI depended on some data, it is better to store that data in variable in useState, so that whenever the data in the variable changes with setState, the component will get rerendered.
