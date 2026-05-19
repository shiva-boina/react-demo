function Login() {
    return (
        <>
            <div class="container">
                <div class="row justify-content-center align-items-center vh-100">
                    <div class="col-md-4">
                        <div class="card shadow p-4">
                            <h3 class="text-center mb-4">Login</h3>

                            <form>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder="Enter email" required/>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" placeholder="Enter password" required/>
                                </div>

                                <div class="d-flex justify-content-between mb-3">
                                    <div>
                                        <input type="checkbox" id="remember"/>
                                            <label for="remember">Remember me</label>
                                    </div>
                                    <a href="#">Forgot password?</a>
                                </div>

                                <div class="d-grid">
                                    <button type="submit" class="btn btn-success">Login</button>
                                </div>
                            </form>

                            <p class="text-center mt-3 mb-0">
                                Don't have an account? <a href="./Signup.jsx">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;