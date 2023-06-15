"use client";

import { cn } from "@/lib/utils";

import { Editor, EditorContent, BubbleMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import Text from "@tiptap/extension-text";
import React, { useEffect } from "react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { useState } from "react";

import DateStampComponent from "../editor/Extension";

const TiptapEditor = ({ className, ...props }) => {
  const editor = new Editor({
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none w-full h-full",
      },
    },
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      BubbleMenu,
      // Collaboration.configure({
      //   document: ydoc,
      // }),
      // DateStampComponent,
      // Placeholder.configure({
      //   placeholder:
      //     "Write something … It’ll be shared with everyone else looking at this example.",
      // }),
    ],
    // onUpdate: ({ editor }) => {
    //   const json = editor.getJSON();
    //   // send the content to an API here
    // },
  });

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
    <div className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 mt-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
      {/* <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
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
      </BubbleMenu> */}
      <EditorContent className="w-full" editor={editor} {...props} />
    </div>
  );
};

// TiptapEditor.displayName = "Textarea";

export { TiptapEditor };
