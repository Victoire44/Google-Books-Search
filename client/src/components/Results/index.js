import React, { Component } from "react";

class Results extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <h2>Results</h2>
                    {!this.props.books.length ? (
                        <h1 className="text-center">No Results to Display</h1>
                    ) : (
                            <div>
                                {this.props.books.map(result => (
                                    <div className="card mb-3" key={result.id}>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img alt={result.title} className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail} />
                                            </div>
                                            <div className="col-md-10">
                                                <div className="card-body">
                                                    <h5 className="card-title">{result.volumeInfo.title} by {result.volumeInfo.authors}</h5>
                                                    <p className="card-text">{result.volumeInfo.description}</p>
                                                    <button onClick={result.volumeInfo.previewLink} className="btn btn-outline-dark mt-3">View </button>
                                                    {/* <button onClick={} className="btn btn-primary mt-3">Save </button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Results;
