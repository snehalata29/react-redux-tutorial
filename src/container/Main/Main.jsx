import React ,{Component} from 'react';
import {Header} from '../../components/Header';
import {connect} from 'react-redux';
import {TopHeadLinePage} from '../../components/TopHeadeLinePage';
import { REQUEST_NEWS_DATA, test } from './action';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router';
import {Login} from '../../components/Login';

class Main extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.testBindCreators('worked');
        this.props.requestNewsHeadlines();
    }

    render(){
        const {articles} = this.props;
        return(
            <>
                <Header></Header>
                {articles?<TopHeadLinePage articles = {articles}></TopHeadLinePage>: null}
                <Switch>
                    <Route path='/login' component={Login} />
                </Switch>
            </>
        )
    }
}

const mapDispatchToProps= (dispatch)=> {
    return {
        requestNewsHeadlines : ()=> dispatch({type: REQUEST_NEWS_DATA}),
        testBindCreators: bindActionCreators(test, dispatch),
        //bindActioncreators can be used when we want to pass payload to action in class component
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
      articles: state.MainReducer.topHeadLines,
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Main);