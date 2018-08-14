import React, {Component} from 'react';
import {TextArea} from './text_area';


export class ExportPDF extends Component {
  constructor(props) {
    super(props);
  }

  download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  render(){
    console.log(this.props);
    return (
      <button
        className="btn btn-primary"
        type="submit"
        onClick={this.props.click}>
          Convert to TXT
        </button>
      )
  }


}
