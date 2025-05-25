import React from "react";

const About = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold">Welcome to Note-Nest</h1>
                    <p className="lead">
                        Note-Nest is your personal digital notebook designed to help you organize thoughts, tasks, and plans efficiently.
                        Built with modern web technologies, Note-Nest is secure, responsive, and easy to use for individuals and teams alike.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src="https://img.freepik.com/free-vector/online-notes-concept-illustration_114360-8134.jpg" className="img-fluid rounded" alt="Note taking illustration" />
                </div>
            </div>

            <div className="row mb-5">
                <div className="col">
                    <h2 className="fw-semibold">Why Choose Note-Nest?</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">📝 Create, read, update, and delete your notes with ease.</li>
                        <li className="list-group-item">🔒 Secure login system using JSON Web Tokens (JWT).</li>
                        <li className="list-group-item">☁️ Cloud-based storage with persistent user data.</li>
                        <li className="list-group-item">📱 Fully responsive UI built with Bootstrap 5.</li>
                        <li className="list-group-item">🚀 Fast performance and a clean interface.</li>
                    </ul>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col">
                    <h2 className="fw-semibold">Features Overview</h2>
                    <p>
                        Note-Nest provides a comprehensive note-taking platform that allows you to capture ideas instantly, edit them as you think, and categorize them using custom tags. Whether you’re a student managing your lectures, a professional organizing meeting notes, or a creative mind capturing ideas on the go—Note-Nest adapts to your needs.
                    </p>
                    <ul>
                        <li>Rich and dynamic user interface</li>
                        <li>Modal-based note editing</li>
                        <li>Validation checks for secure inputs</li>
                        <li>State management with React Context API</li>
                        <li>Server-side API built using Express & MongoDB</li>
                    </ul>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col">
                    <h2 className="fw-semibold">Technologies Used</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>React JS</li>
                                <li>Bootstrap 5</li>
                                <li>React Router DOM</li>
                                <li>Context API</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>JWT Authentication</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col">
                    <h2 className="fw-semibold">Our Vision</h2>
                    <p>
                        At Note-Nest, we believe everyone should have the freedom to express their ideas, manage their knowledge, and access it anytime, anywhere. Our mission is to empower individuals with a tool that feels natural to use and is powerful enough to handle the demands of modern life.
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col">
                    <h2 className="fw-semibold">Get Started</h2>
                    <p>
                        Signing up for Note-Nest is simple and free. Just head to the signup page, create an account, and you’re ready to go! Use the navigation bar to access your dashboard, add new notes, and begin organizing your thoughts today.
                    </p>
                    <a href="/signup" className="btn btn-primary">Create an Account</a>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col text-center">
                    <h5 className="text-muted">Note-Nest &copy; 2025. All rights reserved.</h5>
                </div>
            </div>
        </div>
    );
};

export default About;