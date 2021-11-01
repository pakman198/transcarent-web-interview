import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      <ol className="root">
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
      </ol>
      {/* <p>root</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;ant</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p> */}
    </div>
  );
}
