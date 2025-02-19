import { useNavigate } from "react-router-dom"

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Contact Page</h1>
        <div className="contact-buttons">
            <button onClick={() => navigate("form")}>Contact Form</button>
            <button onClick={() => navigate("info")}>Contact info</button>
        </div>
        </div>
    )
}

export default Contact 