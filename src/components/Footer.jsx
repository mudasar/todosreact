import React from 'react'
import Test from './Test';

export const Footer = (props) => {
    return(
        <div>
            <p>Footer</p>
            {/*<Test />*/}
              {/*<Test />
                <Test />
                  <Test />
                    <Test />
                      <Test />*/}
            {props.children}
        </div>
    )
}

export default Footer;