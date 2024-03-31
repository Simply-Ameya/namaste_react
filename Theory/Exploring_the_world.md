- What is a Microservice?

Microservice is when each step of web development is done independently and has its own service. So for example, the BE service will be independent, authentication service will be independent, Email service will be independent.

- What is Monolithic architecture?

Monolithic architecture is where all the services are running in the same repository or same hosting. So it can craete more load and the server it has to handle everything at the same time.

- Why do we need a useEffect Hook?

useEffect hooks is used to make any updates to the UI after the initial render of the component. It works similar to componentDidMount. So when we are calling any apis we can make the component render first without having to be stuck on apis response and once the response is available it can update the data in the component.

- What is Shimmer UI?

Instead of showing a blank screen to the users at the time of data loading, we show the template of what UI is to come, it can be in the form of empty cards. This is a static HTML to tell user what type of UI to expect once data gets loaded.

- What is Conditional Rendering, explain with a code example

When the rendering happens based on some condition, it is conditional rendering for example, If we want to show login logout buttons... We can do {isLogin ? <butotn>login</button>:<butotn>logout</button>}

- What is CORS?

CORS is cross origin request. when the api URL is hosted on a particular server but the request is being made from a different server, it can give CORS error.

- What is async and await?

async and await are keywords that are generally used in conjunction. async tells javascript to run a function asynchronously in the background with stopping the rest of the process for it. And await waits for the respose data that is taking time. Once the data becomes available then it gets updated in the UI

- What is the use of `const json = await data.json();` in getRestaurants()

data that is comes from the fetch apis is usually stringified that is in string format. So, we use data.json() so convert it to JSON format.

- What is the difference between JS expression and JS statement?

JS express is a code that results in a value for example, 5 + 3, 'hello' + 'world'
JS statement is a line of code that performs action like assignment. for example, let x = true.

- What is Optional Chaining?

Option chaining is used to check null values and verify that the object is available before trying to access values inside the object. for example, myObj?.id : here ? is the option chain.
