import React from 'react'

const testToolbar = (props) => {
    console.log(props);
    let dataForShow = <span>No List</span>  ///
    if (props.show) {

        let previouslyVisitedPaths = JSON.parse(localStorage.getItem("visitedPaths"));
        if (previouslyVisitedPaths !== null) {

            const newItem = {pathURL: props.loc.pathname, name: props.name};
            previouslyVisitedPaths.push(newItem);
            localStorage.setItem("visitedPaths", JSON.stringify(previouslyVisitedPaths));

            dataForShow = previouslyVisitedPaths.map((ig, index) => {/////
                return <span key={index}>{ig.name}---- </span>;/////
            });/////
            console.log(previouslyVisitedPaths)
        }
        else {
            const firstItem = [{pathURL: props.loc.pathname, name: props.name}];
            localStorage.setItem("visitedPaths", JSON.stringify(firstItem));

            dataForShow = <span>{props.name}</span>/////
        }


    } else {
        localStorage.removeItem("visitedPaths");

    }

    return (
        <header>
            <hr/>
            <h4>Toolbar</h4>
            <p>{dataForShow}</p>
            <hr/>
        </header>
    )
}

export default testToolbar;