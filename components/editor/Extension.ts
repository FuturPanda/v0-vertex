import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { v4 as uuidv4 } from "uuid";

import Component from "./DateStampComponent";

export default Node.create({
  name: "dateStampComponent",
  group: "block",
  content: "inline*",
  // topNode: "true",

  addAttributes() {
    return {
      id2: {
        default: "",
        parseHTML: (element) => element.getAttribute("id"),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "date-stamp-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["date-stamp-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
