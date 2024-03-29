- What is Element?

HTML element is a peice of code that will get displayed on the web when we run the application.
React element is a javascript object that is created by using React.createElement(param1, param2, param2). It is not to be confused with HTML element. It takes 3 parameters, first one is the type of element that is to be rendered, for example: h1, p, div. seconf parameter takes the attributes to be passed to the element in the form of an object for example: {id: 'example', xyz: 'abc'}. Third parameter takes the child elements to be rendered. It can be a single child element, or if there are multiple children they can be passed in the form of an array.

- Difference between library and framework.

A framework is a complete package that provides tools to manipulate the DOM, whereas library is a set of tools that can be used to manipulate any given part of the webpage. It needs to be imported to the application before it can be used.

- What is CDN? Why do we use it?

CDN is Content Delivery Network. It is used to deliver the content to web application like text, images, videos, CSS files, Javascript files. CDN links for react contain the javascript code written by the facebook developers which allows us to develop applications using React.

- Why is React known as React?

React is known as React because it fundamentally revolves around the concept of reacting to changes in data. The name "React" comes from the idea of creating interactive user interfaces that react dynamically to changes in data without the need to manually manipulate DOM.

- What is crossorigin in script tag?

crossorigin in script tag tells browser to load script from specified url without including any credentials. By including this attribute, the browser will make a CORS request when fetching the script file.

- What is the difference between React and React DOM?

React is the core library for building user interfaces in React. It provides the functionality for defining components, managing component states, and rendering components to virtual DOM.
React DOM is a specific package designed for rendering React components in DOM. It serves as a bridge berween Reacts virtual DOM and actual DOM. React DOM provides methods for rendering react components to browser, hydrating server-rendered markup, handling events and updating the DOM effeciently in response to changes in component state or props.

- What is difference between react.development.js and react.production.js files via CDN?

react.development.js: It has development verision of react library. It includes additional warning and debugging information to aid developers. It is larger in size compared to production because of the additional debugging code. It is suitable for development environments where debugging and error tracking are crucial.

react.production.js: It has production ready version of react library. Is is optimised for performance and has all development-specific code such as warnings and debugging messages stripped out. It is smaller size compared to development version making it more suitable for production environments where minimising file size and optimising performance is cruical. It omits development specific checks and optimisation, resulting in faster executioin and reduced bundle size.

- What is async and defer?

async : async is an attribute that tells the browser to download the script file asynchronously while parsing the html document. asynchronous loading means that the script will be downloaded in the backgroud without blocking the rendering of rest of the page. Once script is downloaded it will be executed as soon as it is made available, potentially before HTML parsing is complete.

defer : defer also tells browser to download files asynchronously like async. However, the scripts with defer attribute are executed only after the HTML parsing is complete but before the DOMContentloaded event is fired. Defered scripts are gauranteed to execute in order they appear in the HTML document.
