import React, {Component} from 'react';
import {ExportPDF} from './text_to_pdf';
import { Editor } from '@tinymce/tinymce-react';
import {VideoDetail} from './video_detail';


export class TextArea extends Component{

  constructor(props){
    super(props);
    const textAreaContent = "hello";
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }
  textAreaContent(props){
    const dope = "hello";
  }

  onKeyPressed = (args) => {
    if(args.keyCode > 65 && args.keyCode < 90){ // all other key handler
      // player.pauseVideo();
    } else if (args.keyCode == 13){ // return key handler
      console.log("woopidy");
    }
   }

 youTubeIframeAPIReady() {
   player = new YT.Player('player', {
       height: '390',
       width: '640',
       videoId: video_id
   });
}

   // content = tinyMCE.activeEditor.getContent();
  render(){
    return (

      <div className="col-md-4 textArea">

          <Editor
            apiKey='8rp4hn347wu0de5xdlo0m1desvvv52rfiyifi05ish51xzdg'
            initialValue="{video.snippet.title}"
            init={{
               plugins: 'link image code',
               toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
             }}
             onKeyDown={this.onKeyPressed} />
         <br />
         <ExportPDF onClick="this.props.textAreaContent"/>
      </div>
    ); // end return
  } // end render
}
