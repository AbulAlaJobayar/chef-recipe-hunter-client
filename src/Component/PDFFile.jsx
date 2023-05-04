import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Text style={styles.text}>
        1...The differences between uncontrolled and controlled components.

//Uncontrolled components//
 The alternative is uncontrolled components, where form data is handled
     by the DOM itself. To write an uncontrolled component, instead of
     writing an event handler for every state update, you can use a ref
     to get form values from the DOM.
 //Controlled components//

     In a controlled component, the form element's data is handled by the
     React component (not DOM) and kept in the component's state.
     A controlled component basically overrides the default behavior
     of the HTML form elements.

     We create a controlled component by connecting the form element
     input textarea or select to the state by setting its attribute
     value and the event onChange.
 



2.....How to validate React props using PropTypes

 

     PropTypes are a good first line defense when it comes to debugging your apps. But before getting into detail about PropTypes, we have to understand the concept of props.

     Props are the read-only properties that are shared between components to give the unidirectional flow of React a dynamic touch. They're mainly shared from the parent component to the child component, but the reverse is also possible (though not recommended).

     In this blog, we will discuss how to validate or check the props that we are passing to avoid complex debugging at a later stage.

     What are PropTypes?
     PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.

     I don't recommend using them in short apps like projects for self-practice but it's totally up to you. For larger projects like for a client, it's often a wise choice and a good practice to use them.

     There are many different types of PropTypes and all of them have their unique ES6 classes which we can use. We will discuss every type in this article.

     How to use PropTypes
     Before the release of React 15.5.0, PropTypes were available in the React package, but now we have to add the prop-types library in our project.

     We can do so by running the following command in our terminal:

     npm install prop-types --save
     We can use PropTypes to validate any data we are receiving from props. But before using it we will have to import it as always in our app:

     import PropTypes from 'prop-types';
     They are often used after the component ends and starts with the name of the component as shown:
 



 3.....Differences between Express.js and Node.js


     ##What is Node.js?
 
 Node.js is defined as “a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications.” Simply put, Node.js is an open-source and multi-platform environment that lets you build server-side applications and tools by using JavaScript.

     Node.js brought JavaScript to the next level. While JavaScript is used as a client-side development language, Node.js covers the server-side programming. Thanks to the Node.js, JavaScript has become an all-purpose full-stack development language.

     The JS frontend and Node.js backend are easier to keep in sync because of a single language used on both sides of the application. Node.js allows your programs to be written in JavaScript and to be executed on the server.

     Node.js has become one of the most popular tools in the back end development. Enterprise companies like eBay, Netflix, and Uber all support the use of Node.js through a personal example.

     Jeff Harrell, the director of engineering at PayPal, spoke up about Node.js. He said, “Node.js powers our web applications and has allowed our teams to move much faster in bringing their designs to life.”

     One of the reasons why Node.js is so popular is that front end developers can learn it pretty quickly since Node inherits many JavaScript features.

     Developer-wise, Node.js made it possible to share and reuse code. With the help of Node modules, developers can use prebuilt modules or repurpose their own.

     Node is a part of popular MEAN, and MERN JavaScript centered technology stacks that cover an entire web development pipeline. There are many frameworks built for Node such as Meteor, Sails, etc. and Express.js is one of them. 

 
     ##Node.js features

 
     Built on Chrome’s V8, an engine for chromium browsers
     Run-time platform
     Uses a non-blocking, event-driven I/O model
     Follows a single-threaded model
     Highly scalable and lightweight
     Efficient for processing multiple requests with less CPU usage
     Thousands of libraries and tools for JavaScript are gathered on npm (a default Node.js package manager and marketplace)
 

     ##What is Express.js?
 
 
     Express.js is a minimal, flexible, and open-source Node.js web application framework. You can use it on top of Node.js to ensure better web functionality. Express is the most popular Node.js web framework.

     What it provides is a vast set of features for building web applications single, multi-page, and hybrid. With Express, you can structure a web application that can handle multiple HTTP requests at a certain URL.

     Flexibility is visible in numerous components accessible on a package manager. These components automatically persevere into Express.js.

     The reason why Express is the most popular web framework is that it makes the development of web apps, websites, and APIs easier. It also offers an underlying collection of topographies.

     With Express.js, you’ll get to hone different aspects of the web application. You can determine settings like the location of templates that will be used for the response or the port that will be used for establishing a connection.
 
 
     ##Express.js main features
 
 An open-source framework
     Focus on high performance
     Super-high test coverage
     Supports multiple templating engines (which simplifies generating HTML)
     Allows you to write responses to specific URLs
     A simple mechanism that locates bugs in the applications quickly


     ##The Key Differences between Express.js and Node.js
 
 
     We’ve handed you a lot of information that clarifies these two notions, but what about specific differences? It is time to draw a clear line between Express.js and Node.js, which can contribute to your understanding of both.
 

     ##Categorization
 
 Node.js primarily falls under the Frameworks (Full Stack) category.
     Express.js is classified under Microframeworks (Backend) category.
 
##Building block
 Node.js is built on Google’s V8 engine.
     Express.js is built on Node.js
 
     ##Features
 
 Node.js has fewer features than Express.js.
     Express.js embodies more features since it is an addition to Node.js functionalities.

  ##Usage
 
     Node.js is used for building server-side, I/O, event driven apps.
     Express.js uses approaches of Node.js for building web apps and APIs.

 ##Dependence

     Node.js can be used independently from Express.js.
     Express.js requires Node.js.
 
 ##Time 
 Node.js demands more time because of multifaceted tasks that ask for more lines of code and, therefore, more time.
     Express.js demands less time because it can be written in less number of lines and a few minutes.

 ##View model 
 Node.js doesn’t support the view model.
     Express.js supports the view model.

##Programming language 

 
 Node.js is written in C, C++, JavaScript.
     Express.js is written in JavaScript.
     
 ##Controllers 

In Node.js, controllers are not provided.
     In Express.js, controllers are provided





 4.....What is a custom hook, and why will you create a custom hook?



 Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;