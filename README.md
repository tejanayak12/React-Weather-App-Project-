# Hi Engeneers Welcome To my Project Weather App....

## Iam Teja Nayak  (Full-Stack Dev...)

# Iam Here Create a Own Project Of Weather Server with (Live Location)

# With The PlatForm Of (HTML ,CSS , JavaScript)

## So Lets Get Started....

# Step 1 Create a folder a React Module In ur System Using Syntax of
`
npx create-react-app weather-app
`
# Step 2 after Open the folder on Ur VsCode Work Place To Work For Project
`
VSCode => Open Folder => Select UR Folder To Opend It....
` 
# Step 3 Now Open Ur Commond Tool As Terminal And Run the Module...
`
As Terminal =>  npm start => Running module...pls wait
`
# Step 4 Now Install a Libraby of 'axios' to Fetch The Api Of Weather
`
in terminal => npm install axios
`
# after all these lets go to work place VsCOde....
`
first we Shoud take a API fro live Location to Track The Weather 

https://openweathermap.org/current#name
and Choose an api Key of API KEy...

e81fb84e836e5d904f0dd0414d006698 {API Key}
And Then Once Test Ur Url On Chrome is It Was Working OR NOt....
`
# After Calling An URl U Will Get Some Json Data As Below
```js

{
    "coord": {
      "lon": 80.45,
      "lat": 16.3
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 313.09,
      "feels_like": 312.14,
      "temp_min": 313.09,
      "temp_max": 313.09,
      "pressure": 1001,
      "humidity": 19,
      "sea_level": 1001,
      "grnd_level": 998
    },
    "visibility": 10000,
    "wind": {
      "speed": 4.76,
      "deg": 247,
      "gust": 5.24
    },
    "clouds": {
      "all": 89
    },
    "dt": 1685867426,
    "sys": {
      "type": 1,
      "id": 9207,
      "country": "IN",
      "sunrise": 1685837109,
      "sunset": 1685884080
    },
    "timezone": 19800,
    "id": 1270668,
    "name": "Guntur",
    "cod": 200
  }

```

# Ok lets get Started.......
`
Ok Now Create a Folder In Src In the Name Of assets => src/assets it could be as this....

and Upload a Png of Any Image U want it to be as ur BackGround....
opload it in on assets folder
`

# Now the All Things  are  Ready to Start Our Project ..... Lets code....=> 

### Open Ur App.js File And Use This Code...
```js
import React, { useState } from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e81fb84e836e5d904f0dd0414d006698`

  const SearchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation("")
    }

  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={SearchLocation}
          placeholder="Search For Location"
          type="text"></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="discription">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&

          <div className="buttom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels-Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="Wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}
              <p>Wind-Speed</p>
            </div>
          </div>
        }


      </div>
    </div>
  );
}

export default App;
```
`
1.Inthe Above Code we Imported 2 things...1.axios 2.React and its Component useState

2.with the help of the axios we can call the API as Fetch Call In JS

3.And Then There Are Some HTML Elements and Components That Was Used To design a Interface on Ui

4. make sure after calling an API the whole Data could be in Json Format...

5 .take some class name to define for a neat and clear Designs on UI


`

# Now Lets Make Some Changes And Extra Elemts To Look Our Ui Beautiful With The Help Of Css

## In the Index.css File Make Sure U had Done Changes And Implemanted This Code
```js
@import url('https://i.pinimg.com/originals/ed/86/00/ed86001f259f724077d692a891541eec.jpg');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: 'Outfit', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  font-size: 1.6rem;
}

h1 {
  font-size: 6rem;
}

.app{
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
}


.app::before{
  content: '';
  background: url('./assets/sunset.jpg') no-repeat center center/cover ;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 200;
  left: 0;
  z-index: -1;
}


.app .search{
  text-align: center;
  padding: 1rem;

}

.app input{
  padding: .7rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  color: #f8f8f8;
}

::placeholder{
  color: #f8f8f8;
}

.container{
  max-width: 700px;
  height: 700px;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app .top{
  width: 100%;
  margin: 1rem auto;
}

.app .discription{
  position: relative;
  right: -90%;
  transform-origin: 0 0;
  transform: rotate(269deg);
}

.app .buttom{
  position: top;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin:1rem auto ;
  padding: 1rem;
  border-radius: 12px;
  background-color: black

}

.bold{
  font-weight: 700;
}

```

## Ok NOw Check All The Codes Are Correct With Out Getting An Error....
`
After U had Done The Implementation Now Preceed With Syntax Given Below To Run Ur Server

npm run start
`

# Thanking U...
```sh
For Spending Ur valuable Time Fo us....

        Regards From 
                 
                 - Teja Nayak -
```
