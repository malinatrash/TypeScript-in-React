import React from 'react'
import Card, {CardVariant} from "./components/Card";

const App = () => {
	return (
		<div className='App'>
			<Card onClick={(number) => console.log('click', number)} height={"200px"} width={"200px"} variant={CardVariant.outlined} >
				<button>

				</button>
			</Card>
		</div>
	)
}

export default App
