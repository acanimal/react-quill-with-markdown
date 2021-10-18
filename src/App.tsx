import { useState } from "react";
import Editor, { EditorContentChanged } from "./Editor";
import Viewer from "./Viewer";

const initialMarkdownContent = "**StartInitial** writing *something*...";

export default function App() {
  const [editorHtmlValue, setEditorHtmlValue] = useState<string>("");
  const [editorMarkdownValue, setEditorMarkdownValue] = useState<string>("");

  const onEditorContentChanged = (content: EditorContentChanged) => {
    setEditorHtmlValue(content.html);
    setEditorMarkdownValue(content.markdown);
  };

  return (
    <div className="App">
      <h1>ReactQuill editor with markdown import/export </h1>

      <p>The is the ReactQuill based editor.</p>

      <Editor
        value={initialMarkdownContent}
        onChange={onEditorContentChanged}
      />

      <p>When content changes in returns both `html` and `markdown` content.</p>

      <div>
        <textarea defaultValue={editorMarkdownValue} rows={5} />
        <textarea defaultValue={editorHtmlValue} rows={5} />
      </div>

      <p>
        Now we just can use a `Viewer` to show the markdown text in HMTL format:
      </p>

      <div className="viewer">
        <Viewer value={editorMarkdownValue} />
      </div>

      <style jsx global>{`
        body {
          font-family: sans-serif;
          margin: 10px 40px;
        }
      `}</style>

      <style jsx>{`
        textarea {
          width: 45%;
          margin-right: 10px;
        }

        .viewer {
          border: 1px solid #cccccc;
          padding: 5px;
        }
      `}</style>
    </div>
  );
}
