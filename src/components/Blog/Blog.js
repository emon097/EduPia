import React from "react";

const Blog = () => {
  return (
    <div className="m-10">
      <p className="bg-red-400 rounded">1. what is cors?</p>
      <p>
        {" "}
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
        that allows a server to indicate any origins (domain, scheme, or port)
        other than its own from which a browser should permit loading resources.
        CORS also relies on a mechanism by which browsers make a "preflight"
        request to the server hosting the cross-origin resource, in order to
        check that the server will permit the actual request. In that preflight,
        the browser sends headers that indicate the HTTP method and headers that
        will be used in the actual request.{" "}
      </p>
      <p className="bg-red-400 rounded">
        2. Why are you using firebase? What other options do you have to
        implement authentication?{" "}
      </p>
      <p>
        {" "}
        Firebase Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app. It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter, and more.{" "}
      </p>
      <p className="bg-red-400 rounded">3. How does the private route work?</p>
      <p>
        {" "}
        The react private route component renders child components (children) if
        the user is logged in. If not logged in the user is redirected to the
        /login page with the return url passed in the location state property.
        The current logged in user (authUser) is retrieved from Redux state with
        a call to the useSelector() hook. Redux is used in this example however
        it is not required to implement a Private Route component in React
        Router 6. You could use a different state management library or any
        approach you prefer to get the logged in status of the user.{" "}
      </p>
      <p className="bg-red-400 rounded mr-30 ">
        4. What is Node? How does Node work?
      </p>
      <p>
        Node.js is an open-source backend javascript runtime environment. It is
        a used as backend service where javascript works on the server-side of
        the application. This way javascript is used on both frontend and
        backend. Node.js runs on chrome v8 engine which converts javascript code
        into machine code, it is highly scalable, lightweight, fast, and
        data-intensive. Working of Node.js: Node.js accepts the request from the
        clients and sends the response, while working with the request node.js
        handles them with a single thread. To operate I/O operations or requests
        node.js use the concept of threads. Thread is a sequence of instructions
        that the server needs to perform. It runs parallel on the server to
        provide the information to multiple clients. Node.js is an event loop
        single-threaded language. It can handle concurrent requests with a
        single thread without blocking it for one request.
      </p>
    </div>
  );
};

export default Blog;
