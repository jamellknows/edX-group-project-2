import {createContext, useState} from 'react';


export const searchDataContext = createContext();
const SearchDataProvider = (props) => {

    const [searchData, setSearchData] = useState();

    return (
        <searchDataContext.Provider value = {[searchData, setSearchData]}>
            {props.children}
        </searchDataContext.Provider>
    )

}




export default SearchDataProvider;