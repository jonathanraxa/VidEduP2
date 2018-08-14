import React, {Component} from 'react';
import {ExportPDF} from './text_to_pdf';
import { Editor } from '@tinymce/tinymce-react';
import {VideoDetail} from './video_detail';

let textContent;

export class TextArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textContent: null,
    };
  }

  textAreaContent(props){
    const dope = "hello";
  }

  onKeyPressed = (args) => {
    if(args.keyCode > 65 && args.keyCode < 90){ // all other key handler
      // player.pauseVideo();
    } else if (args.keyCode == 13){ // return key handler
    // player.resumeVideo();
    }
  }

  getContent(){
    console.log("textContent: " + textContent);
    this.setState({textContent: tinyMCE.activeEditor.getContent({format : 'text'})});

    console.log("textContent: " + textContent);
    download("VidEdu",textContent);
  }

  render(){

    return (
      <div className="col-md-4 textArea">
          <Editor
            apiKey='8rp4hn347wu0de5xdlo0m1desvvv52rfiyifi05ish51xzdg'
            initialValue="TITLE: {video.snippet.title}"
            selector="textarea"
            theme="modern"
            id="tinyMCE"
            init={{
               plugins: 'link code',
               toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
             }}
             onKeyDown={this.onKeyPressed}
            />
         <br />

         <ExportPDF
           videoTitle={"hi"}
           click={this.getContent}
          />

      </div>
    ); // end return


  } // end render

}
