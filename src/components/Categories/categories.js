import React from 'react';
import "./categories.css";
import { connect } from 'react-redux';
import MotoListItem from "../MotoListItem/motolistitem";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class Categories extends React.Component {

  render () {

  const { categoryName } = this.props.match.params;
  const { motos, categories } = this.props;

  const category = categories.filter(function (c) {
    return c.categoryName == categoryName
  })[0];

    const filteredMotos = motos.filter(function (el) {
      return el.categoryId === category.categoryId;
  });

  return (
    <>
        <div className="crumbs">
        <Breadcrumb>
          <BreadcrumbItem tag="a"><Link to="/">Honda MotorCycles</Link> > </BreadcrumbItem>
          <BreadcrumbItem tag="a" active>{category.categoryName}</BreadcrumbItem>
        </Breadcrumb>
      </div>
    <div className="motos-container">
      {filteredMotos.map((moto, index) => (
        <MotoListItem
          key={index}
          title={moto.title}
          image={moto.imageUrl}
          desc={moto.description}
          price={moto.price}
          slug={moto.slug}
          categoryName={category.categoryName}
        />
      ))}
    </div>
    </>
  )
  }
}
const mapStateToProps = (state) => {
  return {
    motos: state.items,
    categories: state.categories,
  }
}

export default connect(mapStateToProps, null)(Categories)