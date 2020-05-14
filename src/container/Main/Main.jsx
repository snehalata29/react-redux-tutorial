import React ,{Component} from 'react';
import {Header} from '../../components/Header';
import {connect} from 'react-redux';
import {TopHeadLinePage} from '../../components/TopHeadeLinePage';
import { REQUEST_NEWS_DATA } from './action';

class Main extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    componentDidMount(){
        this.props.requestNewsHeadlines();
    }
    render(){
        const {articles} = this.props;
        
        return(
            
            <>
                <Header></Header>
                {articles?<TopHeadLinePage articles = {articles}></TopHeadLinePage>: null}
            </>

        )
    }
}
const mapDispatchToProps= (dispatch)=> {
    return {
        requestNewsHeadlines : ()=> dispatch({type: REQUEST_NEWS_DATA})
    }
    
}
const mapStateToProps = state => {
    return {
      articles: state.MainReducer.topHeadLines
    };
  };
export default connect(mapStateToProps, mapDispatchToProps) (Main);