import React from 'react'
import meme1 from '../images/meme1.jpeg'
import meme2 from '../images/meme2.jpeg'
import meme3 from '../images/meme3.webp'
import './app.css'

const App = () => {
	return (
		<div>
			<h1>You have been hacked!!</h1>
			<p>These aren't the plans you are looking for.</p>
			<p>Now we've hijacked <em>The Devastator!!</em> If you want to find it again you will need to complete a quest.</p>
			<p>Here are some memes while you search for your cherished Imperial Star Destroyer.</p>
			<h2>Memes</h2>
			<img alt="lost the death star oops" src={meme1} />
			<img alt="the plan is working" src={meme2} />
			<img alt="death star pro max" src={meme3} />
			<h2>Oh wait... You don't want memes? Sorry Lord Vader... Just trying to get with times. I can't directly help you get your Star Destroyer back, but maybe you'll figure something out if you use your Tie Fighter.</h2>
		</div>
	)
}

export default App
