import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";


class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    componentDidMount() {
        this.searchBook();
      }

    //   this.handleInputChange = this.handleInputChange.bind(this);
    //   this.handleFormSubmit = this.handleFormSubmit.bind(this);

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };


    render() {
        console.log("this.state.books: " + this.state.books)
        return (
            <div>
                <Form 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
                <Results books={this.state.books} />
            </div>
        )
    }
}

export default Search;
