import { Fragment, useEffect, useState } from 'react';
import Result from '../Result/Result';
import { sum } from '../utils';

export function Calc() {
    useEffect(() => {
        console.log('Calc effects');
    });
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    return (
        <Fragment>
            <div>
                <input
                    type="text"
                    onChange={(evt) => setNumber1(+evt.target.value)}
                ></input>
                <input
                    type="text"
                    onChange={(evt) => setNumber2(+evt.target.value)}
                ></input>
                <button
                    onClick={() => {
                        try {
                            setResult(
                                sum({ numbers: { a: number1, b: number2 } })
                            );
                        } catch (err) {
                            console.log('Exception caught in event handler');
                            setResult(0);
                        }
                    }}
                >
                    Add
                </button>
            </div>
            <Result result={result}></Result>
        </Fragment>
    );
}
