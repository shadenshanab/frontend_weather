import React from "react";
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city_name: '',
      url: '',
      lat: '',
      lon: ''
    }
  }
  

  getWeatherData = async (event) => {
    event.preventDefault();
    const name = event.target.city_name.value;
    const url = `${process.env.REACT_APP_URL}getWeatherData?name=${name}`;
    console.log(url);

    try {
      const result = await axios.get(url);
      this.setState({
        city_name: result.data.city_name,
        lat: result.data.lat,
        lon: result.data.lon
      })
      console.log(this.state.city_name);
      console.log(this.state.link);
      console.log('in try');
    }
    catch
    {
      console.log('Error')
      alert('Error')
    }
  }

  render() {
    return (
      <div>
        <h1>weather App</h1>

        <form onSubmit={this.getWeatherData}>
          <input type="text" name="city_name" placeholder="Enter City Name" />
          <button type='submit'>Get Data</button>
        </form>

        <p>{this.state.city_name}</p>
        <p>{this.state.lat}</p>
        <p>{this.state.lon}</p>
      </div>
    )
  }
}


export default App;