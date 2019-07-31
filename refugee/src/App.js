import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import Home from './components/Home/Home';
import StorySubmitForm from './components/SubmitStory/StorySubmitForm';
import Stories from './components/StoriesPage/Stories';
import Story from './components/StoriesPage/Story';
import AdminLogin from './components/Administration/AdminLogin';
import Login from './components/Administration/Login';
import Register from './components/Administration/Register';


 class App extends Component {
     state = {
       stories: [
         {
           "id": 4,
           "title": "My second story",
           "highlight": "we won",
           "story": "Some more stuff went down"
       },
       {
           "id": 3,
           "title": "My second story",
           "highlight": "we won",
           "story": "Some more stuff went down"
       },
       {
           "id": 2,
           "title": "My third story",
           "highlight": "we won",
           "story": "Wow hey there"
      
         }
       ]
     }

     componentDidMount() {
       Axios.get("http://localhost:3000/stories")
         .then(response => {
           this.setState({
             stories: response.data
           })
         })
         .catch(err => {
           console.log(err)
         })
     }

     render() {
       const { stories } = this.state
      
         return (
           <div className="App">
             <nav>
               <h1>Refugee Stories</h1>  
                 <div className="nav-link">
                     <Link to="/">Home</Link>
                     <Link to="/stories">Stories</Link>
                     <Link to="/storySubmitForm">Submit your story</Link>
                     <Link to="/adminLogin">Admin: Log In</Link>
                 </div>   
             </nav>

          
                <Route path="/" exact render={(props) => <Home stories={stories} />} />
                <Route path="/stories" render={(props) => <Stories {...props} stories={this.state.stories} />} />
                <Route path="/storySubmitForm" render={(props) => <StorySubmitForm {...props} stories={this.state.stories} />} />
                <Route exact path="/AdminLogin" component={AdminLogin} />
                <Route exact path="/register" component={Register} />
                <Route exact path="login" component={Login} />
         </div>
       )
     }
 }

 export default App;
