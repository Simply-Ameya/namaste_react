- Is JSX mandatory for React?

NO. JSX is not mandatory for react as we can still use React.createElement(). However, a more complex heirarchy gets very difficult to read for developers and hence, JSX is used to make things simple.

- Is ES6 mandatory for react?

NO ES6 is not mandatory but just like JSX, it makes code look more readable and shorter.

- How to write comments in JSX?

Using cmd + /

- What is <React.Fragment></React.Fragment> and <></> ?

<></> is used to wrap children component without creating extra nodes. But these cant take key in case of mapping an array. So React.Fragment does the same function as <></> along with allowing addition of key attribute.

- What is virtual DOM?

Virtual DOM is a copy of the actual DOM. React works on virtual DOM. Meaning instead of changing the actual DOM everytime any changes are done, Virtual DOM creates a copy of actual DOM. Whenever any changes are done in the code, the new Virtual DOM is compared with the actual DOM and only the changed part in the virtual DOM is rerendered. Since only the changes are rendered, the build is faster.

- What is Reconciliation in React?

Reconciliation in React refers to the process of updating the UI to reflect changes in the underlying data. When the state or props of a component change, React needs to determine what changes need to be made to the component tree in order to efficiently update the UI.

- Why we need keys in React? When do we need keys in React?

Keys in react are used to uniquely identify a mapped element. When such child component is rerendered, react will try to preserve its state.

- Can we use index as keys in React?

Yes we can use index as keys in React, but it is not a best practice. Because index of a particulat elemnt in an array can be changed in case of array transformation.

- What is props in React?

When we pass data from parent component to child component it is called prop. In general sense it is similar to how we pass attributes to a function.

- What is a Config Driven UI ?

Cofig driven UI is creating UI or making changes to the UI based on the data that is provided by the api response. For example, any offers that an application is providing can be user specific or area specific. These do not require app to be created seperately for each user/location. The, data is provided as response from api and based on that response it is displayed on the UI.
