import React from "react";
import Title from "./components/Title";
import InputValue from "./components/InputValue";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div>
      BTVN
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                <Title></Title>
                <InputValue></InputValue>
                  {/* Tabs navs */}
                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                 <TodoList></TodoList>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
