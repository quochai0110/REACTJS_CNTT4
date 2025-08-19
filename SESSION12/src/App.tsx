import React from 'react'
import Checkout from './components/Checkout'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <div>
      <h1>Bài tập tổng hợp</h1>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
              <div className="col-lg-7">
                <h5 className="mb-3">
                  <a href="#!" className="text-body">
                    <i className="fas fa-long-arrow-alt-left me-2" />
                    Continue shopping
                  </a>
                </h5>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div>
                  <div>
                    <p className="mb-0">
                      <span className="text-muted">Sort by:</span>{" "}
                      <a href="#!" className="text-body">
                        price <i className="fas fa-angle-down mt-1" />
                      </a>
                    </p>
                  </div>
                </div>
                <ProductList></ProductList>
              </div>
              <div className="col-lg-5">
                <div className="card bg-primary text-white rounded-3">
                 <Checkout></Checkout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
