import React, { Component } from 'react'

export default class AddProduct extends Component {
  render() {
    return (
      <div>
        Thêm sản phẩm
        <form action="">
          <input type="number" max={10} min={0} />
        </form>
      </div>
    )
  }
}
