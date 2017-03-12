import React from 'react';

import { protonize, Electron } from 'react-proton';

class App extends React.Component {

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
            <header style={{
                padding: `${3 + 30 * this.props.protonFactor}px`
            }}>
                <h1 style={{
                    fontSize: `${10 + 20 * this.props.protonFactor}pt`,
                    margin: 0
                }}>react-proton</h1>
            </header>
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
