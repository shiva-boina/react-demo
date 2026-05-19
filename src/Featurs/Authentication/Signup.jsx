import { useState } from "react"

function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        let newErrors = {}

        if (!username) {
            newErrors.username = "Username is required"
        }

        if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters"
        }

        if (!email.includes("@")) {
            newErrors.email = "Enter valid email"
        }

        if (mobile.length < 10) {
            newErrors.mobile = "Enter valid mobile number"
        }

        setErrors(newErrors)

        // If no errors
        if (Object.keys(newErrors).length === 0) {
            alert("Signup successful ✅")
        }
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4 text-primary">Signup Form</h3>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <p className="text-danger">{errors.username}</p>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="text-danger">{errors.password}</p>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="text-danger">{errors.email}</p>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter mobile number"
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <p className="text-danger">{errors.mobile}</p>
                    </div>

                    <button className="btn btn-success w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup