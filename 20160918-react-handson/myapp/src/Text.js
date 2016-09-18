import React, { Component } from 'react';

 class Text extends Component {
   constructor(props) {
     super(props);
     this.state = {
       showText: true
     };

     setInterval(() => {
      this.setState({
        showText: !this.state.showText
      });
     }, 1000);
   }

   static defaultProps = {
     text: 'hoge'
   };

  render() {
    // const text = this.state.showText? this.props.text : '';
    return (
      <div>
        <span style={{color: "red"}}>
          {this.props.text}
        </span>
      </div>
    );
  }
}

export default Text;
