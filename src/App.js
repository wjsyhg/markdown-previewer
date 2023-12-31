import * as marked from 'marked';
import { useState, useEffect } from "react";

const App = () => {

  const initalMarkdownTextState = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  const[markdownText, setMarkdownText] = useState(initalMarkdownTextState);
  const[htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const convertedHtml = marked.parse(markdownText);
    setHtmlContent(convertedHtml);
  }, [markdownText]);

  const handleTextareaChange = (e) => {
    setMarkdownText(e.target.value);
  };


  return (
    <div className="App">
      <h1 className="header">Markdown Previewer</h1>
      <div className="container">
        <div className="editor">
          <h3>Editor</h3>
          <textarea className="input" value={markdownText} onChange={handleTextareaChange}></textarea>
        </div>
        <div className="preview">
          <h3>Preview</h3>
          <div className="output" dangerouslySetInnerHTML={{ __html: htmlContent}}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
