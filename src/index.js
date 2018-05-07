import { h, render, Component } from 'preact'
import Card from './components/card/card'
import './styles/reset.scss';
import './styles/base.scss';
import {browserHistory,Router,Route,IndexRoute} from 'react-router'
/** @jsx h */


class App extends Component {	
	render({}, { text }) {
		return (
			<app>
				<Card />
			</app>
		);
	}
}

render(<App />, document.body);
