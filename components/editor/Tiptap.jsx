"use client";
import styled from "styled-components";
import { Editor, EditorContent, BubbleMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import Text from "@tiptap/extension-text";
import React, { useEffect } from "react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { useState } from "react";

import DateStampComponent from "./Extension";

// const ydoc = new Y.Doc();
// const provider = new WebrtcProvider("tiptap-collaboration-extension", ydoc);

const Tiptap = ({ editorState, setEditorState }) => {
  const editor = new Editor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      BubbleMenu,
      // Collaboration.configure({
      //   document: ydoc,
      // }),
      DateStampComponent,
      // Placeholder.configure({
      //   placeholder:
      //     "Write something … It’ll be shared with everyone else looking at this example.",
      // }),
    ],
    content: "<p>Hello World! 🌎️</p>",
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      // send the content to an API here
      // ifejiof
    },
  });

  const handleClick = () => {
    // const bool = json.content.map((item) =>
    //   item.type == "dateStampComponent" && ? true : false
    // );
    // if (bool.includes(true )) {
    //   console.log("Gotcha");
    // }
    // console.log(bool);
    // for (let i = 0; i < 50; i++) {
    //   console.log(json.content);
    // }
  };

  // useEffect(() => {
  //   console.log(editor);
  //   // setEditorState(editor);
  //   editor
  //     .chain()
  //     .focus("end")
  //     .insertContent({ type: "dateStampComponent" })
  //     // .scrollIntoView()
  //     .focus("end")
  //     .run();
  // }, []);
  return (
    <>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          strike
        </button>
      </BubbleMenu>
      <EditorContent editor={editor} />
    </>
  );
};

export const EditorComponent = styled(Tiptap)`
  width: 100%;
  height: 500%;
  outline: non;
  border: none;
  padding: 20px 20px;
  &:focus {
    outline: none;
    border: none;
  }
`;
