import React, { useState, useEffect } from 'react';

import DATA from './data.json';

import "./index.css";

const Children = ({data}) => {
  const children = data.map(item => {
    const { animal, hasChildren } = item;

    if(hasChildren) {
      return (
        <li className="with-child">
          <span>{animal}</span>
          <ol>
            <Children data={hasChildren} />
          </ol>
        </li>
      )
    } else {
      return <li key={animal}>{animal}</li>
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
            <Children data={DATA.animals} />
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
