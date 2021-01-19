import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="container">
      <div className="header_dashboard">
        <h2>Posts</h2>
        <button className="btn_create">Create Post</button>
      </div>
      <div className="table_wrapper">
        <table className="table table striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>#</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
