import React, {useEffect, useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
// import Marquee from './Marquee'

import InfiniteScroll from 'react-infinite-scroll-component';

/* eslint-disable */ 
const  News =(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // const test = articles.map();

   const UpdateNews= async()=>{
        let api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1d6210c19d1f40d1a77d3719de0976a5&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true);
        let data  = await fetch(api);
        let parseddata = await data.json();
        setArticles(parseddata.articles)
        setLoading(false)
        settotalResults(parseddata.totalResults) 
    }

    useEffect(() => {
        UpdateNews(); 
           // eslint-disable-next-line
        
    }, [])

 const fetchMoreData = async() => {
    
        try {
          let api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8568da73669643c1b217f207796617f0&page=${page+1}&pagesize=${props.pagesize}`;
          setpage(page+1)
          setLoading(true);
          let data  = await fetch(api);
          let parseddata = await data.json();
          setArticles(articles.concat(parseddata.articles))
          settotalResults(parseddata.totalResults) 
        } catch (error) {
          console.log("This is the error",error)
        }
     
        
      };
        return (
           
            <>
            
            {/* <h1 className="text-center">NEWS MONKEY-{props.category} TOP HEADLINES</h1>
            <Marquee className="mar">
                <div className="row  mx-2 mt-2 ">      
                for(int i = 0;{i<5};i++){
                  {articles[element]}=
                };
                    </div>
             </Marquee> */}
            {/* <div className="mar">
           
            { 
                articles.map((element)=>{
                return <div className="row  mx-2 mt-2 ">
        <marquee behavior="" direction="">{element.title.slice(0,3)}</marquee>
                    </div>
              
            })}
       <marquee behavior="" direction="">{articles.map.title}</marquee>
   </div>            */}
            {loading}
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}>
            <div className="flex-row  justify-content-center flex-wrap">
            {   
                articles.map((element)=>{
                return <div className="row  mx-2 mt-2 " key={element.url}>
                    <div className="col-6 col-md-4">
                    <NewsItems title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,44):""} imageurl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"NA"} source={element.source.name}/>
                    </div>
                </div>

            })}
</div>
     </InfiniteScroll>       
                
            
            </>
        )
    }


News.defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general'
  }
News.PropsTypes = {
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }

export default News
