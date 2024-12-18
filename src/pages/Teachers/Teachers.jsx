
import Swal from 'sweetalert2'
const Teachers = () => {

    const handleAddBus = (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const leaving_time = form.leaving_time.value;
        const leaving_place = form.leaving_place.value;
        const faculty = form.faculty.value;
        const bus = { category, leaving_time, leaving_place,faculty };

        fetch('https://project-server-lac.vercel.app/allRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bus),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Bus Added successfully",
                        showConfirmButton: "ok",
                    });
                    form.reset();
                }
            })
    }

    return (
        <div>
 <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg mb-16">
                <h2 className="text-3xl text-center font-bold text-blue-600 mb-6">Input a Bus Schedule</h2>
                <form onSubmit={handleAddBus} className=" grid grid-cols-4 gap-5">

                    <div>
                        <label className="label font-semibold text-gray-700">
                            <span className="label-text">Faculty Id</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Faculty id"
                            name="faculty"
                            className="input input-bordered w-full p-3 rounded-lg border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            required
                        />
                    </div>
                    <div>
                        <label className="label font-semibold text-gray-700">
                            <span className="label-text">Category</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Category name"
                            name="category"
                            className="input input-bordered w-full p-3 rounded-lg border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            required
                        />
                    </div>
                    <div>
                        <label className="label font-semibold text-gray-700">
                            <span className="label-text">Leaving Time</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Leaving time"
                            name="leaving_time"
                            className="input input-bordered w-full p-3 rounded-lg border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            required
                        />
                    </div>
                    <div>
                        <label className="label font-semibold text-gray-700">
                            <span className="label-text">Leaving Place</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Leaving place"
                            name="leaving_place"
                            className="input input-bordered w-full p-3 rounded-lg border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            required
                        />
                    </div>

                    <input className="bg-yellow-400 p-1 input w-full mx-0 md:mx-40 rounded-lg mt-8 md:mt-0 " type="submit" value={'Send Request'} />
                </form>
            </div>

        </div>
    );
};

export default Teachers;