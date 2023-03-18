import "./style.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import Banner from '../Banner'

const Search = () =>{

    function searchCountry(event){
        event.preventDefault()
        console.log("Search Country")
    }

    function searchCity(event){
        event.preventDefault()
        console.log("Search City")

    }

    return (
        <>
        <Banner/>
        <div className="container-fluid">
            <div className="search-page d-flex  flex-column offset-md-4 mt-5">
                <div className="search-inputs d-flex mt-5 center-block">
                    <div className="input-group mx-auto mt-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1" onClick={searchCountry}>Search By Country</span>
                        </div>
                        <input id="country-input" type="text" className="form-control" placeholder="Country" aria-label="Country" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
                <div className="search-inputs d-flex mt-5 ">
                    <div className="input-group mx-auto">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1" onClick={searchCity}>Search By City</span>
                        </div>
                        <input id="city-input"type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Search