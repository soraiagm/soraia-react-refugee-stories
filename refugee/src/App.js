import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import Home from './components/Home/Home';
import SubmitStory from './components/SubmitStory/SubmitStory';
import SubmitForm from './components/SubmitStory/SubmitForm';
import Stories from './components/StoriesPage/Stories';
import Story from './components/StoriesPage/Story';
import AdminLogin from './components/Administration/AdminLogin';
import Register from './components/Administration/Register';

 class App extends Component {
     state = {
       stories: []
     }

     componentDidMount() {
       Axios.get("https://refugee-stories.herokuapp.com/api/stories")
         .then(response => {
           this.setState({
             stories: response.data
           })
         })
         .catch(err => {
           console.log(err)
         })
     }

     updateStories = ( stories ) => {
       this.setState({ stories })
     }

     render() {
       const { stories } = this.state
      
         return (
           <div className="App">
             <nav>
               <h1>Stories About Refugees</h1>  
                 <div className="nav-link">
                     <Link to="/">Home</Link>
                     <Link to="/stories">Stories</Link>
                     <Link to="/submitStory">Submit your story</Link> 
                     {/* <Link to="/submitForm">Submit your story</Link>  */}
                     <Link to="/adminLogin">Admin: Log In</Link>
                 </div>   
             </nav>

          
                <Route path="/" exact render={(props) => <Home stories={stories} />} />
                <Route path="/stories" render={(props) => <Stories {...props} stories={this.state.stories} />} />
                <Route path="/story/:id" render={ (props) => <Story {...props} stories={this.state.stories} />} />
                <Route path="/submitForm" render={(props) => <SubmitForm {...props} stories={this.state.stories} updateItems={this.updateItems} />} />    
                <Route exact path="/submitStory" component={SubmitStory} /> 
                <Route exact path="/adminLogin" component={AdminLogin} />  
                <Route exact path="/administration" component={Register} />
         </div>
       )
     }
 }

 export default App;
