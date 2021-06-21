import React, { useState } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  let pageNum = 1;
  const apiurl = "http://www.omdbapi.com/?apikey=407372a8";

  // search
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s + "&page=" + pageNum).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  

  // handle
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  // open popup
  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      // console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  // close popup
  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  // nextPage
  // const nextPage = () => {
  //   if (this.state.movies) {
  //     this.setState({
  //       pageNum: this.state.pageNum +=1
  //     }), () => this.search
  //   }
  // }
  // function nextPage() {
  //   this.this.pageNum +=1,
  //   this.search
  // }

  const nextPage = (e) => {
    pageNum +=1;
    axios(apiurl + "&s=" + state.s + "&page=" + pageNum).then(({ data }) => {
      let results = data.Search;

      setState(prevState => {
        return { ...prevState, results: results }
      })
    });
  }

  const prevPage = (e) => {
    pageNum -=1;
    axios(apiurl + "&s=" + state.s + "&page=" + 1).then(({ data }) => {
      let results = data.Search;

      setState(prevState => {
        return { ...prevState, results: results }
      })
    });
  }


  return (
    <div className="App">
      <header>
        <h1>Kevin's Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>

        <Results results={state.results} openPopup={openPopup} />
        {/* if no title, don't show popup; vise versa */}
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
       
        <button className="page" onClick={prevPage}>Previous Page</button>
        <button className="page" onClick={nextPage}>Next Page</button>
      </main>
    </div>
  );
}

export default App;
