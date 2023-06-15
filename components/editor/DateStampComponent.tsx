import { NodeViewWrapper } from "@tiptap/react";
import React, { useCallback, useEffect, useState } from "react";
const { DateTime } = require("luxon");

export default (props) => {
  const today = DateTime.now();
  const dateStamp = `${today.year}${today.month}${today.day}`;
  console.log(props);

  const handleUpdate = () => {
    // const dateStamps = [];
    // const transaction = editor.state.tr;
    // editor.state.doc.descendants((node, pos) => {
    //   if (node.type.name === "date-stamp-component") {
    //     const id = `heading-${dateStamp}`;

    //     if (node.attrs.id !== id) {
    //       transaction.setNodeMarkup(pos, undefined, {
    //         ...node.attrs,
    //         id,
    //       });
    //     }

    //     dateStamps.push({
    //       level: node.attrs.level,
    //       text: node.textContent,
    //       id,
    //     });
    //   }
    // });

    // transaction.setMeta("addToHistory", true);
    // transaction.setMeta("preventUpdate", false);

    // editor.view.dispatch(transaction);

    // setItems(dateStamps);
    console.log("handleupdate");
    props.editor.commands.focus("start");

    props.editor
      .chain()
      .insertContentAt(endPos, { type: "paragraph", content: "Bouyahhh" })
      .focus(endPos)
      .run();
  };

  // useEffect(() => {
  //   if (!props.editor) {
  //     return null;
  //   }

  //   props.editor.on("update", handleUpdate);
  //   console.log(props.editor);

  //   return () => {
  //     props.editor.off("update", handleUpdate);
  //   };
  // }, [props.editor]);

  //
  return (
    <NodeViewWrapper className="date-stamp-component">
      <h1 id={dateStamp}>{today.toLocaleString()}</h1>
    </NodeViewWrapper>
  );
};
