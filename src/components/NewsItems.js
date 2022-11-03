import React from 'react'


const NewsItems  =(props)=> {

    let{title,description,imageurl,newsUrl,date,author,source} = props;
     return <>
     {/* <Card style={{borderRadius:'10px'}}>       */}
    <div className="card card-rgb mt-2"  >
              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'80%',zIndex:'1'}}>{source}</span>
  <img src={imageurl} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By:{author} on {new Date(date).toGMTString()}</small></p> 
    <a rel="noreferrer"   href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
  </div>
      
  </> 
   

}

export default NewsItems
