export const mongodbQuiz = [
  
  {
    id: 1,
    question: "What is MongoDB?",
    options: [
      "A. Document-oriented NoSQL database",
      "B. Relational database",
      "C. File system",
      "D. Spreadsheet software"
    ],
    answer: "A. Document-oriented NoSQL database"
  },
  {
    id: 2,
    question: "Which company developed MongoDB?",
    options: ["A. Facebook", "B. Google", "C. MongoDB Inc.", "D. Microsoft"],
    answer: "C. MongoDB Inc."
  },
  {
    id: 3,
    question: "Which language is MongoDB written in?",
    options: ["A. C++", "B. Java", "C. Python", "D. Go"],
    answer: "A. C++"
  },
  {
    id: 4,
    question: "MongoDB stores data in the form of?",
    options: ["A. Rows & Columns", "B. JSON-like documents", "C. Key-Value pairs", "D. Tables"],
    answer: "B. JSON-like documents"
  },
  {
    id: 5,
    question: "Which data format does MongoDB use internally?",
    options: ["A. CSV", "B. BSON", "C. XML", "D. YAML"],
    answer: "B. BSON"
  },
  {
    id: 6,
    question: "What is the default port of MongoDB?",
    options: ["A. 27017", "B. 8080", "C. 3306", "D. 1521"],
    answer: "A. 27017"
  },
  {
    id: 7,
    question: "Which command is used to show all databases in MongoDB?",
    options: ["A. show dbs", "B. show databases", "C. list dbs", "D. db.show()"],
    answer: "A. show dbs"
  },
  {
    id: 8,
    question: "Which command is used to switch databases in MongoDB?",
    options: ["A. use <db_name>", "B. switch <db_name>", "C. select <db_name>", "D. change <db_name>"],
    answer: "A. use <db_name>"
  },
  {
    id: 9,
    question: "Which method inserts a single document in MongoDB?",
    options: ["A. insertOne()", "B. insertMany()", "C. save()", "D. addOne()"],
    answer: "A. insertOne()"
  },
  {
    id: 10,
    question: "Which method inserts multiple documents in MongoDB?",
    options: ["A. insertOne()", "B. insertMany()", "C. save()", "D. addAll()"],
    answer: "B. insertMany()"
  },
  {
    id: 11,
    question: "What is the default database in MongoDB?",
    options: ["A. admin", "B. local", "C. test", "D. config"],
    answer: "C. test"
  },
  {
    id: 12,
    question: "Which command is used to check the current database?",
    options: ["A. db", "B. show db", "C. current db", "D. get db"],
    answer: "A. db"
  },
  {
    id: 13,
    question: "Which function is used to update documents in MongoDB?",
    options: ["A. updateOne()", "B. updateMany()", "C. Both A and B", "D. modify()"],
    answer: "C. Both A and B"
  },
  {
    id: 14,
    question: "Which method is used to delete a single document?",
    options: ["A. deleteOne()", "B. deleteMany()", "C. remove()", "D. dropOne()"],
    answer: "A. deleteOne()"
  },
  {
    id: 15,
    question: "Which method is used to delete multiple documents?",
    options: ["A. deleteOne()", "B. deleteMany()", "C. remove()", "D. dropMany()"],
    answer: "B. deleteMany()"
  },
  {
    id: 16,
    question: "Which command drops a collection?",
    options: ["A. db.collection.remove()", "B. db.collection.drop()", "C. db.drop()", "D. db.remove()"],
    answer: "B. db.collection.drop()"
  },
  {
    id: 17,
    question: "Which command drops a database?",
    options: ["A. drop db", "B. db.dropDatabase()", "C. remove db", "D. delete db"],
    answer: "B. db.dropDatabase()"
  },
  {
    id: 18,
    question: "What is a collection in MongoDB?",
    options: [
      "A. A set of rows",
      "B. A group of JSON-like documents",
      "C. A schema",
      "D. A database function"
    ],
    answer: "B. A group of JSON-like documents"
  },
  {
    id: 19,
    question: "What is an index in MongoDB?",
    options: [
      "A. A pointer to data for faster queries",
      "B. A schema definition",
      "C. A backup file",
      "D. A collection name"
    ],
    answer: "A. A pointer to data for faster queries"
  },
  {
    id: 20,
    question: "Which MongoDB shell command lists collections in a database?",
    options: ["A. show tables", "B. show collections", "C. list collections", "D. db.showCollections()"],
    answer: "B. show collections"
  }


];
export const nodeQuiz = [
  {
    id: 1,
    question: "Node.js is built on which JavaScript engine?",
    options: ["SpiderMonkey", "JavaScriptCore", "V8 Engine", "Chakra"],
    answer: "V8 Engine"
  },
  {
    id: 2,
    question: "Which of the following is NOT a Node.js module?",
    options: ["http", "fs", "events", "requests"],
    answer: "requests"
  },
  {
    id: 3,
    question: "What is the default scope in Node.js?",
    options: ["Local", "Global", "Block", "Module"],
    answer: "Module"
  },
  {
    id: 4,
    question: "Which command is used to initialize a Node.js project?",
    options: ["npm install", "npm start", "npm init", "node init"],
    answer: "npm init"
  },
  {
    id: 5,
    question: "Which of the following is true about Node.js?",
    options: [
      "Node.js is single-threaded",
      "Node.js is multi-threaded",
      "Node.js runs only in browser",
      "Node.js cannot handle async tasks"
    ],
    answer: "Node.js is single-threaded"
  },
  {
    id: 6,
    question: "Which module is used to create a web server in Node.js?",
    options: ["url", "http", "fs", "path"],
    answer: "http"
  },
  {
    id: 7,
    question: "How do you import a module in Node.js (CommonJS)?",
    options: [
      "import module from 'module'",
      "require('module')",
      "include('module')",
      "load('module')"
    ],
    answer: "require('module')"
  },
  {
    id: 8,
    question: "Which statement about EventEmitter is correct?",
    options: [
      "It is used for file system operations",
      "It is used for event-driven programming",
      "It is a core module for HTTP",
      "It is used for debugging only"
    ],
    answer: "It is used for event-driven programming"
  },
  {
    id: 9,
    question: "What is the default port of Node.js HTTP server if not specified?",
    options: ["3000", "8080", "80", "No default port"],
    answer: "No default port"
  },
  {
    id: 10,
    question: "Which of these is used to handle asynchronous operations in Node.js?",
    options: ["Threads", "Promises", "Forks", "Subroutines"],
    answer: "Promises"
  }
];

export const expressQuiz = [
  {
    id: 1,
    question: "What is Express.js?",
    options: [
      "A front-end framework",
      "A Node.js web application framework",
      "A database management system",
      "A JavaScript compiler"
    ],
    answer: "A Node.js web application framework"
  },
  {
    id: 2,
    question: "Which method is used to create a new router in Express?",
    options: ["express.route()", "express.Router()", "express.newRouter()", "express.create()"],
    answer: "express.Router()"
  },
  {
    id: 3,
    question: "Which command installs Express.js using npm?",
    options: ["npm install express", "npm get express", "install express", "node install express"],
    answer: "npm install express"
  },
  {
    id: 4,
    question: "Which method is used to start an Express server?",
    options: ["app.listen()", "app.run()", "express.start()", "server.init()"],
    answer: "app.listen()"
  },
  {
    id: 5,
    question: "What is middleware in Express.js?",
    options: [
      "A function that handles requests and responses",
      "A database connection",
      "A front-end library",
      "An HTTP method"
    ],
    answer: "A function that handles requests and responses"
  },
  {
    id: 6,
    question: "Which of the following is NOT an HTTP method supported by Express?",
    options: ["GET", "POST", "FETCH", "PUT"],
    answer: "FETCH"
  },
  {
    id: 7,
    question: "How do you define a GET route in Express?",
    options: [
      "app.route('/path')",
      "app.get('/path', callback)",
      "app.fetch('/path', callback)",
      "app.listen('/path')"
    ],
    answer: "app.get('/path', callback)"
  },
  {
    id: 8,
    question: "Which method sends a JSON response in Express?",
    options: ["res.json()", "res.sendJSON()", "res.send()", "res.write()"],
    answer: "res.json()"
  },
  {
    id: 9,
    question: "Which middleware is used to parse incoming JSON request bodies?",
    options: ["express.static()", "express.json()", "express.urlencoded()", "express.body()"],
    answer: "express.json()"
  },
  {
    id: 10,
    question: "Which middleware is used to serve static files in Express?",
    options: ["express.static()", "express.files()", "express.serve()", "express.public()"],
    answer: "express.static()"
  },
  {
    id: 11,
    question: "How do you pass control to the next middleware in Express?",
    options: ["next()", "continue()", "nextMiddleware()", "pass()"],
    answer: "next()"
  },
  {
    id: 12,
    question: "Which method is used for all HTTP methods in Express?",
    options: ["app.get()", "app.all()", "app.use()", "app.route()"],
    answer: "app.all()"
  },
  {
    id: 13,
    question: "What is the default port number commonly used for Express apps?",
    options: ["80", "3000", "5000", "8080"],
    answer: "3000"
  },
  {
    id: 14,
    question: "Which method is used to redirect a request in Express?",
    options: ["res.redirect()", "res.send()", "res.go()", "res.route()"],
    answer: "res.redirect()"
  },
  {
    id: 15,
    question: "Which object contains information about the HTTP request?",
    options: ["res", "req", "app", "next"],
    answer: "req"
  },
  {
    id: 16,
    question: "Which object is used to send responses in Express?",
    options: ["req", "res", "next", "router"],
    answer: "res"
  },
  {
    id: 17,
    question: "What is the purpose of res.send()?",
    options: ["Send a response", "Send a file", "Send JSON", "Send headers only"],
    answer: "Send a response"
  },
  {
    id: 18,
    question: "Which function in Express is used to handle errors?",
    options: ["Error handler middleware", "app.catch()", "res.error()", "app.errorHandler()"],
    answer: "Error handler middleware"
  },
  {
    id: 19,
    question: "Which keyword is used to export a router in Express?",
    options: ["exports", "module.exports", "router.export", "export default"],
    answer: "module.exports"
  },
  {
    id: 20,
    question: "What does app.use() do in Express?",
    options: [
      "Registers middleware",
      "Starts the server",
      "Creates a route",
      "Handles database"
    ],
    answer: "Registers middleware"
  },
  {
    id: 21,
    question: "Which Express middleware helps secure apps by setting HTTP headers?",
    options: ["helmet", "morgan", "cors", "dotenv"],
    answer: "helmet"
  },
  {
    id: 22,
    question: "Which Express middleware is used for logging requests?",
    options: ["helmet", "cors", "morgan", "express-logger"],
    answer: "morgan"
  },
  {
    id: 23,
    question: "Which Express middleware allows cross-origin requests?",
    options: ["helmet", "cors", "body-parser", "morgan"],
    answer: "cors"
  },
  {
    id: 24,
    question: "Which statement is true about res.end()?",
    options: [
      "Ends the response process",
      "Sends a JSON response",
      "Redirects the request",
      "Sends an HTML response"
    ],
    answer: "Ends the response process"
  },
  {
    id: 25,
    question: "Which Express method is used to render a template?",
    options: ["res.render()", "res.send()", "res.template()", "res.view()"],
    answer: "res.render()"
  },
  {
    id: 26,
    question: "What is the difference between res.send() and res.json()?",
    options: [
      "res.send() sends any type of response, res.json() sends JSON",
      "Both are same",
      "res.send() sends only strings, res.json() sends HTML",
      "res.json() is slower"
    ],
    answer: "res.send() sends any type of response, res.json() sends JSON"
  },
  {
    id: 27,
    question: "Which of these can be chained for defining routes in Express?",
    options: ["app.chain()", "app.route()", "app.bind()", "app.next()"],
    answer: "app.route()"
  },
  {
    id: 28,
    question: "Which middleware is used for parsing URL-encoded data?",
    options: ["express.urlencoded()", "express.json()", "express.body()", "express.static()"],
    answer: "express.urlencoded()"
  },
  {
    id: 29,
    question: "Which function is used to create an Express application?",
    options: ["express()", "createExpress()", "new Express()", "expressApp()"],
    answer: "express()"
  },
  {
    id: 30,
    question: "Which Express feature allows grouping routes together?",
    options: ["Router", "Cluster", "Middleware", "Pipeline"],
    answer: "Router"
  }
];

export const reactQuiz = [
  {
    id: 1,
    question: "What is React primarily used for?",
    options: [
      "Database management",
      "Building user interfaces",
      "Server-side scripting",
      "Operating system development"
    ],
    answer: "Building user interfaces"
  },
  {
    id: 2,
    question: "What is the virtual DOM in React?",
    options: [
      "A lightweight copy of the real DOM",
      "A server-side DOM",
      "The actual browser DOM",
      "A database schema"
    ],
    answer: "A lightweight copy of the real DOM"
  },
  {
    id: 3,
    question: "Which method is used to create components in React (before hooks)?",
    options: ["class components", "render()", "constructor()", "new Component()"],
    answer: "class components"
  },
  {
    id: 4,
    question: "Which hook is used for managing state in a functional component?",
    options: ["useEffect", "useState", "useReducer", "useContext"],
    answer: "useState"
  },
  {
    id: 5,
    question: "Which hook is used for side effects in React?",
    options: ["useReducer", "useState", "useEffect", "useMemo"],
    answer: "useEffect"
  },
  {
    id: 6,
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "Java XML Syntax"
    ],
    answer: "JavaScript XML"
  },
  {
    id: 7,
    question: "What is the correct way to pass data from parent to child in React?",
    options: ["props", "state", "context", "useEffect"],
    answer: "props"
  },
  {
    id: 8,
    question: "What is the purpose of `key` prop in lists?",
    options: [
      "To identify unique elements",
      "To style list items",
      "To sort elements",
      "To filter elements"
    ],
    answer: "To identify unique elements"
  },
  {
    id: 9,
    question: "Which method is used to render React elements to the DOM?",
    options: [
      "ReactDOM.render()",
      "React.render()",
      "render()",
      "React.create()"
    ],
    answer: "ReactDOM.render()"
  },
  {
    id: 10,
    question: "Which hook is used for context API?",
    options: ["useContext", "useReducer", "useEffect", "useMemo"],
    answer: "useContext"
  },
  {
    id: 11,
    question: "React is based on which architecture?",
    options: ["MVC", "MVVM", "Component-based", "Layered"],
    answer: "Component-based"
  },
  {
    id: 12,
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook"
  },
  {
    id: 13,
    question: "What is a higher-order component (HOC) in React?",
    options: [
      "A component that manages hooks",
      "A function that takes a component and returns a new component",
      "A built-in React component",
      "A method for DOM manipulation"
    ],
    answer: "A function that takes a component and returns a new component"
  },
  {
    id: 14,
    question: "Which hook is used to optimize performance by memoizing values?",
    options: ["useEffect", "useMemo", "useState", "useCallback"],
    answer: "useMemo"
  },
  {
    id: 15,
    question: "Which hook is used to memoize functions in React?",
    options: ["useMemo", "useEffect", "useCallback", "useReducer"],
    answer: "useCallback"
  },
  {
    id: 16,
    question: "What is the default port for React development server?",
    options: ["3000", "4000", "5000", "8080"],
    answer: "3000"
  },
  {
    id: 17,
    question: "What is React Fragment used for?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To style elements",
      "To optimize performance",
      "To manage state"
    ],
    answer: "To group multiple elements without adding extra nodes to the DOM"
  },
  {
    id: 18,
    question: "What does lifting state up mean in React?",
    options: [
      "Moving state from parent to child",
      "Sharing state by moving it to the closest common ancestor",
      "Moving state to the Redux store",
      "Deleting state from a component"
    ],
    answer: "Sharing state by moving it to the closest common ancestor"
  },
  {
    id: 19,
    question: "What does the `useReducer` hook do?",
    options: [
      "Manages complex state logic",
      "Optimizes rendering",
      "Fetches data",
      "Handles side effects"
    ],
    answer: "Manages complex state logic"
  },
  {
    id: 20,
    question: "What is the difference between state and props?",
    options: [
      "Props are mutable, state is immutable",
      "State is mutable, props are immutable",
      "Both are mutable",
      "Both are immutable"
    ],
    answer: "State is mutable, props are immutable"
  },
  {
    id: 21,
    question: "Which method is used to update state in class components?",
    options: ["setState()", "updateState()", "changeState()", "modifyState()"],
    answer: "setState()"
  },
  {
    id: 22,
    question: "Which tool is commonly used for debugging React apps?",
    options: [
      "React DevTools",
      "Redux Logger",
      "Chrome Lighthouse",
      "Webpack Analyzer"
    ],
    answer: "React DevTools"
  },
  {
    id: 23,
    question: "Which lifecycle method is used to perform tasks after component mounts?",
    options: ["componentDidMount", "componentWillMount", "render", "componentUpdate"],
    answer: "componentDidMount"
  },
  {
    id: 24,
    question: "Which lifecycle method is called before a component is removed from DOM?",
    options: ["componentWillUnmount", "componentDidMount", "render", "componentDidUpdate"],
    answer: "componentWillUnmount"
  },
  {
    id: 25,
    question: "What is the purpose of Redux in React apps?",
    options: [
      "To manage side effects",
      "To manage global state",
      "To handle routing",
      "To render UI components"
    ],
    answer: "To manage global state"
  },
  {
    id: 26,
    question: "Which package is used for routing in React?",
    options: ["react-router-dom", "react-navigation", "react-route", "react-link"],
    answer: "react-router-dom"
  },
  {
    id: 27,
    question: "What is the difference between controlled and uncontrolled components?",
    options: [
      "Controlled components store state in the component, uncontrolled store in the DOM",
      "Controlled components use refs, uncontrolled use state",
      "Both store data in the DOM",
      "Both store data in the component"
    ],
    answer: "Controlled components store state in the component, uncontrolled store in the DOM"
  },
  {
    id: 28,
    question: "What does React.StrictMode do?",
    options: [
      "Checks potential problems in an application",
      "Optimizes performance",
      "Enables server-side rendering",
      "Handles routing"
    ],
    answer: "Checks potential problems in an application"
  },
  {
    id: 29,
    question: "Which hook is used to fetch data in React apps?",
    options: ["useFetch", "useEffect", "useData", "useState"],
    answer: "useEffect"
  },
  {
    id: 30,
    question: "What does lazy loading in React help with?",
    options: [
      "Reduces initial loading time by loading components only when needed",
      "Increases performance by loading all components at once",
      "Helps in state management",
      "Preloads all images"
    ],
    answer: "Reduces initial loading time by loading components only when needed"
  }
];
