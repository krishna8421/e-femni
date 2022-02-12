import { Post } from "@interfaces/Post.interface";

export const post1: Post = {
  meta: {
    shortTitle: "Post 1",
    shortDescription:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    author: "Krishna",
    dateCreated: new Date(),
    slug: "post1",
    id: 1,
  },
  imgUrl:
    "https://images.unsplash.com/photo-1644665154099-57f1f473b0cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  title: "Post 1 Test",
  content: `Welcome to the Python Wiki, a user-editable  compendium of knowledge based around the Python programming language. Some pages are protected against casual editing - see WikiEditingGuidelines for more information about editing content. Python is a great object-oriented, interpreted, and interactive programming language. It is often compared (favorably of course :-) ) to Lisp, Tcl, Perl, Ruby, C#, Visual Basic, Visual Fox Pro, Scheme or Java... and it's much more fun.Python combines remarkable power with very clear syntax. \n \n It has modules, classes, exceptions, very high level dynamic data types, and dynamic typing. There are interfaces to many system calls and libraries, as well as to various windowing systems. New built-in modules are easily written in C or C++ (or other languages, depending on the chosen implementation). Python is also usable as an extension language for applications written in other languages that need easy-to-use scripting or automation interfaces.`,
};
