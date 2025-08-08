import { useState } from "react";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-[#27cb11b7] to-[#2575fc] shadow-md rounded-lg dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-white text-center">
        Get in Touch
      </h2>
      <p className="text-center text-gray-200 mt-2">
        Feel free to contact me if you have any questions or would like to work
        together!
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2  bg-gray-800 text-white"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Message</label>
          <textarea
            name="message"
            className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-300">Or find me on:</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/Githup-hana"
            className="text-gray-300 hover:text-indigo-600"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hana-abrham-212551290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-gray-300 hover:text-indigo-600"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hana.abrham@dci-student.org"
            className="text-gray-300 hover:text-indigo-600"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
