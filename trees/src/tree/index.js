import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      <ul className="root">
        <li>root</li>
        <li>
          <ul>
            <li>ant</li>
            <li>
              <span>bear</span>
              <ul>
                <li>cat</li>
                <li>
                  <span>dog</span>
                  <ul>
                    <li>elephant</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>frog</li>
          </ul>
        </li>
      </ul>
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
