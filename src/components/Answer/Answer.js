import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div>
             <div className='answser'>
                <h1 className='answser-text'>Answers:</h1>
                <p className='answser-text'> 
                <h5>How React is works?</h5><br />
                    React is javascripts library.It's work with virtual dom.we can write html like element here, but it's not real html.React converts it to js object.When we update in components it create
                    a virtual dom and compared with origianal dom.Then it updates only where it changed and call this specific function only. <br /><br />

                        <h5>Props vs State</h5>
                        Props: <br /> 1.Props is immutable <br />
                            2.It gets value from parent  <br />
                            3.It can pass value parent to child. <br />
                        State: <br />
                            1.State is muteable <br />
                            2.It stored property value. <br />
                            3.It created with in component but we can pass state value by props. <br />

                            <h5>How use state works?</h5>
                            useState() is used to update DOM when an event happend.It set the component Value.It is a react hook.It is a function 
                            that called specific element when event interaction happends.It has two elements a stateful value, and a function to update it.
                                </p>

            </div>
        </div>
    );
};

export default Answer;