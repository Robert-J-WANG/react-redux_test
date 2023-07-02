import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { AddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const person = { id: nanoid(), name: name, age: age };
        this.props.jiayiren(person);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }
    render() {
        return (
            <div>
                <h2>我是Person组件,上面组件的求和为{this.props.qiuhe}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.yiduiren.map(person => {
                            return (
                                <li key={person.id}>name:{person.name} , age: {person.age}</li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        yiduiren: state.rens,
        qiuhe: state.he
    }),// 映射状态
    { jiayiren: AddPersonAction }// 映射操作状态的方法
)(Person);
