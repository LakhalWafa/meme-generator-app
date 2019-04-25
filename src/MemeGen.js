import React, { Component } from 'react';
import Header from './Header';
import Paper from '@material-ui/core/Paper';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  }

  render() {
    return (
      <div id="meme">
        <Header />
        <Paper>
          <form className="meme-form" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                className="form-control my-2 mx-3"
                type="text"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
              />
              <input
                className="form-control my-2 mx-3"
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
              />
              <div class="input-group-append  mx-3 my-2">
                <button className="btn btn-outline-danger">Gen</button>
              </div>
            </div>
          </form>
        </Paper>
        <Paper>
          <div className="meme">
            <img src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </Paper>
      </div>
    );
  }
}

export default MemeGenerator;
