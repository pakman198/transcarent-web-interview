import React, { useState } from 'react';

import DATA from './data.json';

import "./index.css";

const Children = ({data, parent = 1, reversed}) => {
  const [ list, setList ] = useState(data);

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

    const childTitle = (
      <>
        <span>{animalString}</span>
        {inputField}
      </>
    );

    if(hasChildren) {
      return (
        <li className={`with-child ${reversed ? 'reversed' : '' }`} key={animal}>
          {childTitle}
          <ol>
            <Children data={hasChildren} parent={parent + 1} reversed={reversed} />
          </ol>
        </li>
      )
    } else {
      return (
        <li key={animal}>
          {childTitle}
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
  const [isReversed, setIsReversed] = useState(false);

  const toggleHandler = () => {
    setIsReversed(isReversed => !isReversed);
  }

  return (
    <div className="tree">
      <button onClick={toggleHandler}>Toggle</button>
      <ol className="root">
        <Children data={DATA.animals} reversed={isReversed} />
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
