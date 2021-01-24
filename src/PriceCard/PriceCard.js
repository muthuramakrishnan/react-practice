import React, { Component } from 'react';

class FeatureList extends Component{
  render(){
    return(<li><span className="fa-li"><i className="fas fa-check"></i></span>
    {
      (this.props.element.isBold) ? <strong>{this.props.element.title}</strong> : this.props.element.title
    }
  </li>);
  }
}
function PriceCard(params){
    return (
        <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{params.data.type}</h5>
          <h6 className="card-price text-center">{params.data.price}{params.data.currency}<span className="period">/{params.data.period}</span></h6>
          <hr/>
          <ul className="fa-ul">
            {
              params.data.features.map((element) => {
                return <FeatureList element = {element}></FeatureList>
              })
            }
           
          </ul>
          <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
        </div>
      </div>
      );
}

export default PriceCard;