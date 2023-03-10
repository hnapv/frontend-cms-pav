import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCustomers } from '../../services/customerServices';

const Customers = () => {
    const dispatch = useDispatch()
    const listCustomers = useSelector(state => state.customer.listCustomers)
    useEffect(() => {
        dispatch(fetchAllCustomers())
    }, [])
    console.log("listCustomers==>", listCustomers)
    console.log("tesst=>>>")
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {listCustomers && listCustomers.length > 0
                        && listCustomers.map((a, index) => {
                            return (
                                <tr key={`${index}-listCustomers`}>
                                    <td>{index}</td>
                                    <td>{a.CustomerName}</td>
                                    <td>{a.CustomerID}</td>
                                    <td>{a.PhoneNumber}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Customers