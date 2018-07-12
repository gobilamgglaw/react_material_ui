import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Selectfield from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api/?key',
        apiKey: '9528332-17528ffc6fb65d42dce5db356',
        images: []
    };

    onTextCahnge = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
        axios
        .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
        &image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({images: res.data.hits}))
        .catch(err => console.log(err));
    });
    };

  render() {
      console.log(this.state.images);
    return (
      <div>
        <TextField name="searchText" value={this.state.searchText}
        onChange={this.onTextCahnge} floatingLabelText="Search for Images"
        fullWidth={true}/>
        <br/>
        <Selectfield name="amont" floatingLabelText="Amount" value={this.state.amount}
        onChange={this.onAmountChange}>
            <MenuItem value={5} primaryText="5"/>
            <MenuItem value={10} primaryText="10"/>
            <MenuItem value={15}  primaryText="15"/>
            <MenuItem value={30} primaryText="30"/>
            <MenuItem value={50} primaryText="50"/>
        </Selectfield>
        <br/>
      </div>
    )
  }
}

export default Search;