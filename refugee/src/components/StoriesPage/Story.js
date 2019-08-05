// import React from 'react';
// import { Collapse } from 'reactstrap';

// class Story extends React.Component {
//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = { 
//             story: props.story,
//             collapse: false,
//             buttonText: "Read full story" };
//     }
//     toggleCollapse() {
//         this.setState(state => ({ 
//             collapse: !state.collapse,
//          }))
//          if (!this.state.collapse) {
//              this.setState(state => ({
//                  buttonText: 'Close Story'
//              }))
//          }else {
//              this.setState(state => ({
//                  buttonText: "Read Story"
//              }))
//          }
//     }
//     render() {
//         return(
//             <div className="story-container">
//                 <div>
//                     <h2>{this.props.story.title}</h2>
//                 </div>
//                 <div>
//                     <img src={this.props.story.imageurl} alt='Author' />
//                 </div>
//             <Collapse isOpen={this.state.collapse}>
//                 <div className="story-content">
//                     <p>{this.props.story.story}</p>
//                 </div>
//             </Collapse>
//                     <button onClick={this.toggle}>{ this.state.buttonText }</button>
//             </div>
//         )
//     }
// }

// export default Story;

import React from 'react';

const Story = props => {
    const story = props.stories.find(i => String(i.id) === props.match.params.id);

    return (
        <div className="story-wrapper">
            <div className="story-header">
            </div>

            <div className="story-title-wrapper">
                <h2>{story.name}</h2>
                <h2>{story.title}</h2>
                <p>{story.story}</p>
            </div>

        </div>
    );
}

export default Story;


