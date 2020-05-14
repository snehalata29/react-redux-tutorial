import React from 'react';
import './TopHeadLinePage.css';

import { Row, Col } from 'react-bootstrap';

const TopHeadLinePage = ({articles})=>{

const newsHeadlines = articles.map((artical, index)=>{
return(
    <Col md={3} lg={3} key ={index}>
      <div className="article-conatiner">
        <div className="article-header">
        <a href ={artical.url}>{artical.title}</a>
        </div>
        <div>
          <img src={artical.urlToImage} alt= "" className="img"/>
        </div>
        <div className="footer">
          <div >{artical.author}</div>
          <div >{artical.publishedAt.substr(0,10)}</div>
        </div>
      </div>
    </Col>
)
})
  return (
    <>
    <Row>
      {newsHeadlines}
     </Row>
    </>
  )
}
 
export default TopHeadLinePage;



