import React from 'react'

function DScience({cards}) {
  console.log(cards); 
  return <div className="row">
  {cards.map((ele,i)=>(
     <div className="col-lg-4 col-sm-6 mb-4" key={i}>
    <div className="card h-100">
<a href="#"><img className="card-img-top" src={ele.src} alt=""/></a>
<div className="card-body">
  <h4 className="card-title">
    <a href="#">{ele.title}</a>
  </h4>
  <h6>{ele.category}</h6>
  <p className="card-text">{ele.content}</p>
  <a href="#" className="read-more">
        {" "}
        Read More &gt;&gt;
      </a>
</div>
 <div className="card-footer">
      <p className="card-foot-text">{ele.date} {"."} {ele.comment}  </p>
    </div>
</div>
</div>
))}
</div>

}

export default DScience