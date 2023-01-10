import DisplayBox from "./Components/DisplayBox/DisplayBox";
import TextBox from "./Components/TextBox/TextBox";
import { useState } from "react";
function App() {
  const preset = [
    "An h1 header \n============ \n",
    "## This is an h2 \n",
    "Paragraphs are separated by a blank line.\n",
    "2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\n",
    "look like:\n",
    "* this one\n",
    "* that one\n",
    "* the other one \n",
    "Note that --- not considering the asterisk --- the actual text \n",
    "content starts at 4-columns in. \n",
    "> Block quotes are \n",
    "> written like so. \n",
    "> \n",
    "> They can span multiple paragraphs, \n",
    "> if you like. \n \n",
    `Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all \n`,
    `in chapters 12--14"). Three dots ... will be converted to an ellipsis.\n`,
    `Unicode is supported. ☺\n`,
    "An h2 header\n",
    "------------\n",
    "Here's a numbered list: \n",
    "1. first item \n",
    "2. second item \n",
    "3. third item \n",
    "Note again how the actual text starts at 4 columns in (4 characters\n",
    "from the left side). Here's a code sample: \n",
    "    # Let me re-iterate ... \n",
    "    for i in 1 .. 10 { do-something(i) } \n \n",
    "As you probably guessed, indented 4 spaces. By the way, instead of \n",
    "indenting the block, you can use delimited blocks, if you like: \n",
    "~~~\n",
    "define foobar() {\n",
    `    print "Welcome to flavor country!"; \n`,
    "}\n",
    "~~~\n"
  ]
  

  const [textData, setTextData] = useState(preset.join(""))

  return (
    <div className="App">
      <TextBox data={textData} setData={setTextData}/>
      <DisplayBox data={textData}/>
    </div>
  );
}

export default App;
