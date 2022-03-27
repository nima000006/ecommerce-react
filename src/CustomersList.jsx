import React, { Component } from "react";
export default class CustomersList extends Component {
    state = {
        pageTitle: "Customers",
        customersCount: 5,
        customers:
            [
                {
                    id: 1,
                    name: "scott",
                    phone: "123-456",
                    address:
                    {
                        city: "london"
                    },
                    photo: "https://picsum.photos/id/0/5616/3744"
                },
                {
                    id: 2,
                    name: "jones",
                    phone: "923-333",
                    address:
                    {
                        city: "tehran"
                    },
                    photo: "https://picsum.photos/id/1/5616/3744"
                },
                {
                    id: 3,
                    name: "allen",
                    phone: "924-333",
                    address:
                    {
                        city: "berlin"
                    },
                    photo: "https://picsum.photos/id/2/5616/3745"
                },
                {
                    id: 4,
                    name: "james",
                    address: {
                        city: "shomal"
                    },
                    photo: "https://picsum.photos/id/3/5616/3746"
                },
                {
                    id: 5,
                    name: "john",
                    address: {
                        city: "jonob"
                    },
                    photo: "https://picsum.photos/id/4/5616/3747"
                },
            ]
    };

    render() {
        return (
            <div>
                <h4 className=" m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge bg-secondary m-2">
                        {this.state.customersCount}
                    </span>

                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
            </div>
        )
    }
    onRefreshClick = () => {
        this.setState({
            customersCount: 0,
        });
    };

    getPhoneToRender = (phone) => {
        {

            if (phone) {
                return phone
            } else {
                return <div className="bg-warning p-2 text-center">No Phone</div>
            }
        }

    };
    getCustomerRow = () => {
        return this.state.customers.map((cust, index) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img style={{ width: "60px" }} src={cust.photo} />
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={() => {
                                this.onChangePictureClick(cust, index);
                            }}>Change</button>
                        </div>
                    </td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>
            );
        });
    };
    onChangePictureClick = (cust, index) => {
        let custArr = this.state.customers;
        custArr[index].photo = "https://picsum.photos/id/10/5616/3744";
        this.setState({ customers: custArr })
    };
}
