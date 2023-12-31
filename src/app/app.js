import React, {useState} from 'react'

import * as config from '../config/config'

import './app.css'

const App = () => {
	const [number1, setNumber1] = useState(null)
	const [number2, setNumber2] = useState(null)
	const [number3, setNumber3] = useState(null)
	const [isSuccess, setIsSuccess] = useState(false)
	const [isFailure, setIsFailure] = useState(false)

	const onClick = (event) => {
		event.preventDefault()

		if (number1 === config.correctNumber1 && number2 === config.correctNumber2 && number3 === config.correctNumber3) {
			setIsSuccess(true)
			setIsFailure(false)
		} else {
			setIsSuccess(false)
			setIsFailure(true)
		}
	}

	return (
		<div className="container">
			{!isSuccess && <h1>
				Please enter your three-digit PIN to continue
			</h1>}
			{!isSuccess && <div>
				<div>
					<input min="1" max="9" type="number" name="pin1" onChange={(event) => setNumber1(event.target.value)}/>
					<input min="1" max="9" type="number" name="pin2" onChange={(event) => setNumber2(event.target.value)}/>
					<input min="1" max="9" type="number" name="pin3" onChange={(event) => setNumber3(event.target.value)}/>
				</div>
				<button onClick={onClick}>Submit</button>
			</div>}
			{isSuccess && <div className="success">
				<h2>Access granted!</h2>
				<p>Next, you will meet your onboarding instructor. Please connect with them to receive a special message.</p>
			</div>}
			{isFailure && <div className="failure">
				<h2>Incorrect</h2>
				<p>Please review your pre-onboarding assignments. If you have any questions, then please reach out to your companion-bot</p>
			</div>}
		</div>
	)
}

export default App
