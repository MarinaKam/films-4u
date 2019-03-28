import React, { Fragment } from 'react';
import List from "../List/List";

const Main = ({movies}) => {
    if(!movies) return <div>Loading...</div>;
    return(
        <Fragment>
            { movies && <List list={movies}/> }
        </Fragment>
    )
};

export default Main;
