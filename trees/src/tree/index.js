import React, { useState, useEffect } from 'react';

import DATA from './data.json';

import "./index.css";

const Children = ({data, parent = 1}) => {
  const [ list, setList ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    console.log({ e, value })
    setList([
      ...list, 
      { animal: value, hasChildren: null}
    ])
    e.target.reset();
  }

  useEffect(() => {
    setList(data)
  }, []);


  const children = list.map((item, index) => {
    const { animal, hasChildren } = item;
    const isLastItem = list.length - 1 === index;

    console.log({ list, index })

    let periods = "";
    for(let i = 0; i < parent; i++) {
      periods += '.';
    }

    const animalString = `${animal[0]}${periods}${animal.slice(1)}`;
    const inputField = isLastItem && (
      <form onSubmit={handleSubmit}>
        <input type="text"/>
      </form>
    )

    if(hasChildren) {
      return (
        <li className="with-child" key={animal}>
          <span>{animalString}</span>
          {inputField}
          <ol>
            <Children data={hasChildren} parent={parent + 1} />
          </ol>
        </li>
      )
    } else {
      return (
        <li key={animal}>
          {animalString}
          {inputField}
        </li>
      )
    }

  });

  return (
    <>
      {children}
    </>
  )
}

export default function Tree() {

  return (
    <div className="tree">
      <ol className="root">
        <li className="with-child">
          <span>root</span>
          <ol>
            <Children data={DATA.animals.reverse()} />
          </ol>
        </li>
      </ol>


      {/* <ol className="root">
        <li className="with-child">
          <span>root</span>
          <ol>
            <li>ant</li>
            <li className="with-child">
              <span>bear</span>
              <ol>
                <li>cat</li>
                <li className="with-child">
                  <span>dog</span>
                  <ol>
                    <li>elephant</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>frog</li>
          </ol>
        </li>
      </ol> */}
    </div>
  );
}
