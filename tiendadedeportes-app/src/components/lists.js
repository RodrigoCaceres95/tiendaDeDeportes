import { Component } from "react";
class Boton extends Component {
    render(){
        return(
            <button>{this.props.name}</button>
        )
    }
}
class List extends Component {
    render(){
        return(
            <table>
                <tr>
                    <th>NAME</th>
                    <th>BOTON</th>
                </tr>
                <tr>
                    <td>
                        <p>NAME</p>
                    </td>
                    <td>
                        <Boton name="Click"></Boton>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>NAME</p>
                    </td>
                    <td>
                        <Boton name="Click"></Boton>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>NAME</p>
                    </td>
                    <td>
                        <Boton name="Click"></Boton>
                    </td>
                </tr>
            </table>
        )
    }
}
export default List 