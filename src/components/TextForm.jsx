import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TextForm = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared all Texts!", "success");
    handleUpScroll();
  };

  const handleUpsClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
    handleUpScroll();
  };

  const handleLosClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
    handleUpScroll();
  };

  const minifyCss = () => {
    let newText = text
      .replace(/([^0-9a-zA-Z.#])\s+/g, "$1")
      .replace(/\s([^0-9a-zA-Z.#]+)/g, "$1")
      .replace(/;}/g, "}");
    setText(newText);
    props.showAlert("Minified the CSS!", "success");
    handleUpScroll();
  };

  // Caps first letter of Word:
  const handleCapsWord = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const updatedText = arr.join(" ");
    setText(updatedText);
    props.showAlert("Capitalized Each Word!", "success");
    handleUpScroll();
  };

  //to capitalise first text of the sentence
  const handleCapFirst = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert(
      "Capitalized the first word of the first sentence!",
      "success"
    );
    handleUpScroll();
  };
  //remove all the symbols
  const handleTxtExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("Extracted the text!", "success");
    handleUpScroll();
  };

  //to extract only the numbers in the text:
  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;
    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
    props.showAlert("Extracted the Numbers!", "success");
    handleUpScroll();
  };

  const handleReverse = () => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Reversed the Text!", "success");
    handleUpScroll();
  };
  // function to use Text to speech:
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text to Speech Enabled!", "success");
    handleUpScroll();
  };
  // Copy to clipboard:
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
    handleUpScroll();
  };
  const handleUpScroll = () => {
    window.scrollTo(0, 0);
  };
  const minifyHtml = () => {
    let html = text
      .replace(/([^0-9a-zA-Z.#])\s+/g, "$1")
      .replace(/\s([^0-9a-zA-Z.#]+)/g, "$1")
      .replace(/;}/g, "}");
    setText(html);
    props.showAlert("Minified the HTML!", "success");
    handleUpScroll();
  };
  // using the useState!
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-2 mx-2 grid justify-content-center">
        <>
          <label
            className="mdc-text-field mdc-text-field--filled mdc-text-field---textarea mdc-text-field--no-label"
            style={{ height: 220, paddingTop: 6 }}
          >
            <span className="mdc-text-field__ripple" />
            <span className="mdc-text-field__resizer">
              <textarea
                className="mdc-text-field__input"
                rows={40}
                cols={40}
                aria-label="Label"
                defaultValue={""}
                value={text}
                placeholder="ENTER SOMETHING HERE..."
                onChange={handleOnChange}
              />
            </span>
            <span className="mdc-line-ripple" />
          </label>

          {/* Required Material Web JavaScript library */}
          {/* Instantiate single textfield component rendered in the document */}
        </>
      </div>
      <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Utility" {...a11yProps(0)} />
          <Tab label="Dev Tools" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="container my-2 mx-2">
          <button disabled={text.length === 0}
            onClick={handleCopy}
            className="mdc-button mdc-button--outlined mx-2 my-1"
          >
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__label">Copy</span>
          </button>

          <button disabled={text.length === 0}
            className="mdc-button mdc-button--outlined mx-2 my-1"
            onClick={handleSpeak}
          >
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__label">🔊</span>
          </button>
          <button disabled={text.length === 0}
            onClick={handleClearClick}
            className="mdc-button mdc-button--outlined mx-2 my-1"
          >
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__label">Clear</span>
          </button>
          <button disabled={text.length === 0}
            className="mdc-button mdc-button--raised mx-2 my-1"
            onClick={handleUpsClick}
          >
            <span className="mdc-button__label">Uppercase</span>
          </button>
          <button disabled={text.length === 0}
            className="mdc-button mdc-button--raised mx-2 my-1"
            onClick={handleLosClick}
          >
            <span className="mdc-button__label">Lowercase</span>
          </button>
          <button disabled={text.length === 0}
            className="mdc-button mdc-button--raised mx-2 my-1"
            onClick={handleTxtExtract}
          >
            <span className="mdc-button__label">Extract Text</span>
          </button>
          <button disabled={text.length === 0}
            className="mdc-button mdc-button--raised mx-2 my-1"
            onClick={handleNumExtract}
          >
            <span className="mdc-button__label">Extract Numbers</span>
          </button>
          <button disabled={text.length === 0}
            className="mdc-button mdc-button--raised mx-2 my-1"
            onClick={handleReverse}
          >
            <span className="mdc-button__label">Reverse Text</span>
          </button>
          <button disabled={text.length === 0}
            className="mdc-button mdc-button--raised mx-2 my-1"
            onClick={handleCapFirst}
          >
            <span className="mdc-button__label">Capitalize</span>
          </button>
          <button disabled={text.length === 0}
            className="mdc-button mdc-button--raised mx-2 my-1"
            onClick={handleCapsWord}
          >
            <span className="mdc-button__label">First Text Cap</span>
          </button>
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="container my-2 mx-2">
          <button disabled={text.length === 0} className="mdc-button mdc-button--raised mx-2 my-1" onClick={minifyHtml}>
            <span className="mdc-button__label">Minify Html</span>
          </button>
          <button disabled={text.length === 0} className="mdc-button mdc-button--raised mx-2 my-1" onClick={minifyCss}>
            <span className="mdc-button__label">Minify Css</span>
          </button>
        </div>
      </TabPanel>
    </Box>
   
    <h4 className="text-left ml-6">Preview Text:</h4>
      
        <div class="overflow-scroll h-32 w-64 bg-gray-300 m-2">
        
        {text.length > 0 ? text : "Nothing to preview!"}
</div>
    </>
  );
};
export default TextForm;
