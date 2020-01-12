import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    currentStyle: {
      fontWeight: "",
      fontStyle: "",
      textDecorationLine: "",
      color: ""
    },
    bold: { backgroundColor: "white"},
    italic: { backgroundColor: "white"},
    underline: { backgroundColor: "white"}
  };

  addStyle = (st, styl) => {
    let temp = {
      bold: { fontWeight: this.state.currentStyle.fontWeight },
      italic: { fontStyle: this.state.currentStyle.fontStyle },
      underline: { textDecorationLine: this.state.currentStyle.textDecorationLine },
      color: this.state.currentStyle.color
    };

    if (st != "color" && this.state[st].backgroundColor == "white") {
      temp[st] = styl;
      
      if (st == "bold")
        this.setState({bold: { backgroundColor: "blue"}});
      else if (st == "italic")
        this.setState({italic: { backgroundColor: "blue"}});
      else if (st == "underline")
        this.setState({underline: { backgroundColor: "blue"}});
    } else if (st != "color" && this.state[st].backgroundColor == "blue") {
      temp[st] = "";

      if (st == "bold")
        this.setState({bold: { backgroundColor: "white"}});
      else if (st == "italic")
        this.setState({italic: { backgroundColor: "white"}});
      else if (st == "underline")
        this.setState({underline: { backgroundColor: "white"}});
    } else if (st == "color")
      temp[st] = styl;

    let meshTemp = {
      fontWeight: temp.bold.fontWeight,
      fontStyle: temp.italic.fontStyle,
      textDecorationLine: temp.underline.textDecorationLine,
      color: temp.color
    };

    this.setState({currentStyle: meshTemp});
  };

  render() {
    const styles = {
      bold: { fontWeight: "bold" },
      italic: { fontStyle: "italic" },
      underline: { textDecorationLine: "underline" }
    };

    const styleNames = ["bold", "italic", "underline"];
    const colors = ["yellow", "blue", "red", "black", "purple"];

    const stylingBoxes = styleNames.map(style => {
      return (
        <button style={styles[style], this.state[style]} key={style} onClick={() => this.addStyle(style, styles[style])}>
          {style}
        </button>
      );
    });

    const colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.addStyle("color", color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={this.state.currentStyle}/>
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
