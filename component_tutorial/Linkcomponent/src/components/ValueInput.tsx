import React, { Component } from 'react';

interface State {
    value: any,
    props:any
}
// TypeScriptの場合は、引き受ける引数の型を定義する必要あり
interface IProps {
    title:string,onChange: (e: any) => void, value: number;
}
class ValueInput extends Component<IProps> {
    state: State = {
        value: undefined,
        props:undefined
    };
    constructor(props: any) {
        super(props);
        this.state.value = props.value;
        this.state.props = props;
    }
    handoleChange(e:any) {
        const v = e.target.value;
        const newValue = v.replace(/[^0-9.]+/g,'');
        this.setState({value:newValue});
        if(this.state.props.onChange){
            this.state.props.onChange({
                target:this,
                value:newValue
            });
        }
    }
    componentWillReceiveProps(nextProps:any) {
        this.setState({value:nextProps.value});
    }
    render() {
        return(<div><label>{this.state.props.title}:<br />
            <input type='text' value={this.state.value} onChange={e=>this.handoleChange(e)}></input>
        </label></div>)
    }

}
export default ValueInput