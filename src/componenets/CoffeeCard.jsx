/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }

                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div>
                <figure><img src={photo} alt="Movie" className=" w-44
            mr-16" /></figure>
            </div>
            <div className="flex w-full ">
                <div className="w-full text-left">
                    <h2 className="">Name : {name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Category : {category}</p>
                    <p>Supplier : {supplier}</p>
                    <p>Taste : {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn">view</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-400">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;