import React from 'react';
import WorkoutSearch from './workouts/WorkoutSearch.jsx';
import WorkoutList from './workouts/WorkoutList.jsx';
import axios from 'axios';

class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			view: 'WorkoutList',
			user: null, 
			workouts: [],
			nutrition: []
		}

		this.fetchUser = this.fetchUser.bind(this);
		this.updateView = this.updateView.bind(this);
	}

	fetchUser() {
		axios.get(`/user/info/${'Jeremy Hernandez'}`)
		  .then((userData) => {
			this.setState({user: userData.data});
		  })
		  .catch((err) => {
			console.err('Failed to get userData');
		  })
	}
	
	updateView(e) {
		this.setState({view: e.target.name})
	}

	componentDidMount(){
		this.fetchUser();
	}
	
	render(){
		
		switch(this.state.view){
			case 'WorkoutList':
				return (
					<div id="root-app">Fitness Tracker
					<nav>
						<button type="button" onClick={(e) => this.updateView(e)}  name="WorkoutList">Current Workouts</button>
						<button type="button" onClick={(e) => this.updateView(e)}  name="WorkoutSearch">Search Workouts</button>
						<button type="button" onClick={(e) => this.updateView(e)}  name="Nutrition">Nutrition Helper</button>						
					</nav>
					{this.state.user ?
					  <div>
					  <WorkoutList workouts={this.state.workouts}/>
					  </div>
					 :
					  <div>
						<h1>Please Login</h1>
					  </div>
					  }
					</div>				
				)
			case 'WorkoutSearch':
				return (
					<div id="root-app">Fitness Tracker
					<nav>
						<button type="button" onClick={(e) => this.updateView(e)}  name="WorkoutList">Current Workouts</button>
						<button type="button" onClick={(e) => this.updateView(e)}  name="WorkoutSearch">Search Workouts</button>
						<button type="button" onClick={(e) => this.updateView(e)}  name="Nutrition">Nutrition Helper</button>						
					</nav>
					{this.state.user ?
					  <div>
					  <WorkoutSearch/>
					  </div>
					 :
					  <div>
						<h1>Please Login</h1>
					  </div>
					  }
					</div>
				)
			case 'Nutrition':
				return (
					<div id="root-app">Fitness Tracker
					<nav>
						<button type="button" onClick={(e) => this.updateView(e)} name="WorkoutList">Current Workouts</button>
						<button type="button" onClick={(e) => this.updateView(e)}  name="WorkoutSearch">Search Workouts</button>
						<button type="button" onClick={(e) => this.updateView(e)}  name="Nutrition">Nutrition Helper</button>						
					</nav>
						<div>NUTRITION component has not been implemented</div>
					</div>
				)
			default:
				return (
					<div id="root-app">Fitness Tracker
					<nav>
						<button type="button" onClick={(e) => this.updateView(e)}  name="WorkoutList">Current Workouts</button>
						<button type="button" onClick={(e) => this.updateView(e)}  name="WorkoutSearch">Search Workouts</button>
						<button type="button" onClick={(e) => this.updateView(e)}  name="Nutrition">Nutrition Helper</button>						
					</nav>
						<div>LOGIN component has not been implemented.</div>
					</div>
				)
		}
	}
	
}

export default App;