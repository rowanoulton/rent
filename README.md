# Rent

A mightily simplistic fetcher of (trademe) rental listings in New Zealand. Iterates through the specified [regions](https://github.com/rowanoulton/rent/blob/master/config/regions.js), fetches listings for each, and not much else.

## Getting started

All you'll need is [Node.js](https://nodejs.org) and a [registered trademe application](developer.trademe.co.nz) to get going. First and foremost you'll need to create an `auth.js` file containing your details:

	cp config/auth.sample.js config/auth.js
	vim config/auth.js

Next, install the necessary dependencies:

	npm install
	
... and kick it off with:

	npm start