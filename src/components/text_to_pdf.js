import React from 'react';


export class ExportPDF extends React.Component{

  // const textDocument = document.getElementById("input_area").value;
  helloTest(props){
    console.log(this.dope);

  }
  render(){
    return <button
    className="btn btn-primary"
    type="submit"
    onClick={this.props.helloTest}>Convert to PDF</button>
  }
}
