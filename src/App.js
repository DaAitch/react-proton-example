import React from 'react';

import { protonize, Electron, protonStyle } from 'react-proton';

class App extends React.Component {

    headerStyle = {
        padding: [3, 33, 'px'],
        backgroundColor: ['#ff4022', '#ff715b'],
        color: 'white'
    };

    h1Style = {
        fontSize: [10, 20, 'pt'],
        margin: 0
    };

    cols = {
        m: 1/2,
        l: 1/4
    };

    electronStyle = {
        fontSize: [10, 20],
        textAlign: 'center',
        padding: {
            xxs: '20px',
            m: '40px',
        }
    };

    infoStyle = {
        textAlign: 'center',
        padding: '10px'
    };

    render() {

        return <div>
            <header style={protonStyle(this.headerStyle, this.props.proton)}>
                <h1 style={protonStyle(this.h1Style, this.props.proton)}>react-proton</h1>
            </header>
            <div style={this.infoStyle}>
                Please resize this window to see how the Electrons move around.
            </div>
            <div style={this.infoStyle}>
                current proton: <strong>{this.props.proton.protonName}, {this.props.protonFactor}</strong>
            </div>
            <div>
                <Electron cols={this.cols} style={this.electronStyle}>
                    I'm Electron #1<br />😁<br />
                </Electron>
                <Electron cols={this.cols} style={this.electronStyle}>
                    I'm Electron #2<br />😂
                </Electron>
                <Electron cols={this.cols} style={this.electronStyle}>
                    I'm Electron #3<br />😃
                </Electron>
                <Electron cols={this.cols} style={this.electronStyle}>
                    I'm Electron #4<br />😄
                </Electron>
            </div>
        </div>;
    }
}

export default protonize(App);
