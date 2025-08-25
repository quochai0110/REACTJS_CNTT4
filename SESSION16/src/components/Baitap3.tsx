import React, { Component } from "react";
interface Color {
  color: string;
  label: string;
}
interface State {
  colors: Color[];
}
export default class Baitap3 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      colors: [
        {
          color: "blue",
          label: "Primary",
        },
        {
          color: "gray",
          label: "Secondary",
        },
        {
          color: "green",
          label: "Success",
        }
      ],
    };
  }
  render() {
    return (
      <div>
        <h1> Bài tập 3</h1>
        <ul>
            {this.state.colors.map((color,index)=>(
                <button style={{'backgroundColor':color.color}} key={index}>{color.label}</button>
            ))}
        </ul>
      </div>
    );
  }
}
