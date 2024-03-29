- What is JSX?

React generally creats an element in an object format and the syntax of creating the react element is React.createElement("type of element", {attributes}, "content"). Which is complicated and becomes uneasy to read in case of nested elements. So, the Babel package gives us the ability to create the react elements in HTML syntax, and then it converts those elements into object format at the time of bundling the application. This new style of writing the react elements in HTML style is called JSX.

- What is the role of type in script tag? What options can we use there?

The type attribute in script tag specifies the type of content that will be loaded by the script tag. The options that can be used are:
text/javascript: for javascript code
module: indicates ECMAScript (ES) allowing for import export statements.
application/javascript: similar to text/javascript
text/html: for HTML code
text/css: for css code
application/json: for JSON data
text/plain: for plain text
