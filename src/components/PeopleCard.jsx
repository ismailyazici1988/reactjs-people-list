import React from "react";

const PeopleCard = ({ data }) => {
  //   console.log(data);
  const { id, name, age, image } = data;
  return (
    <div className="col">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} alt="image" width="150px" height="100" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <small className="text-muted">{age} years</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
