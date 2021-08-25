import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config

  return (
    <Wrapper>
      <div className="poweredBy">
        <A
          key="website"
          href="https://strapi.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Advance
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
