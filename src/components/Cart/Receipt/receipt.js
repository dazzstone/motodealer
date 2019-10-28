import React, { Component } from 'react'
import { connect } from 'react-redux'
import './receipt.css'
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class Receipt extends Component {

  componentWillUnmount() {
    if (this.refs.shipping.checked)
      this.props.substractShipping()
  }

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    }
    else {
      this.props.substractShipping();
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    that.setState({
      date:
        // eslint-disable-next-line no-useless-concat
        date + '.' + '0' + month + '.' + year,
    });
  }

  render() {
    return (
      <>
      <div className="crumbs">
        <Breadcrumb>
            <BreadcrumbItem tag="a"><Link to="/">Honda MotorCycles</Link> > </BreadcrumbItem>
          <BreadcrumbItem tag="a" active>Receipt</BreadcrumbItem>
        </Breadcrumb>
      </div>
        <div className="receipt">
          <div className="treceipt"><center>RECEIPT</center></div>
          <br />
          <div className="date">Date: {this.state.date}</div>
          <div className="selname">Seller`s name: Honda MotoCycles</div>
          <div>Address: Ukraine, Dnipro, Kirova prosp., 31</div>
          <div>Our phone: +380980046939</div>
          <div>Selling licence №57829402</div>
          <br />
          <input placeholder="Buyer`s full name" className="fio"></input>
          <br />
          <input placeholder="Your e-mail" type="email" id="emailAddress" maxLength="30" className="fio"></input>
          <div>Payment method: 
            <input type="radio" id="radioButton" name="payment"></input>
            <label> Cash</label>
                <input type="radio" id="radioButton" name="payment"></input>
            <label> Debit Card</label>
          </div>
          <br />
          <label>
            <input className="box" type="checkbox" ref="shipping" onChange={this.handleChecked} />
            <span>Shipping (+50$)</span>
          </label>
          <br />
          <div className="collection-item"><b>Total: {this.props.total} $</b></div>
          <br />
          <button className="subm">Submit</button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
    substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt)

