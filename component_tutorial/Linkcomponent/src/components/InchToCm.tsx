import React, { Component } from 'react';
import ValueInput from './ValueInput';

interface State {
    inch: number,
    cm: number
}

class InchToCm extends Component {
    state: State = {
        inch: 0,
        cm: 0
    };
    inchChange(e: any) {
        const cmValue = e.value;
        const inchValue = cmValue * 2.54;
        this.setState({
            inch: inchValue,
            cm: cmValue
        });
    }
    cmChange(e: any) {
        const cmValue = e.value;
        const inchValue = cmValue * 2.54;
        this.setState({
            inch: inchValue,
            cm: cmValue
        });
    }
    render() {
        return (<div >
            <ValueInput title='inch'
                onChange={(e:any) => this.inchChange(e)}
                value={this.state.inch}>
            </ValueInput>
            <ValueInput title='cm' onChange={(e:any) => this.cmChange(e)} value={this.state.cm}></ValueInput>
        </div>)
    }
}
export default InchToCm