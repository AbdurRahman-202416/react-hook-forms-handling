import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert(`Welcome, ${data.username}!`);
    reset(); // Reset form after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-transparent backdrop-blur-lg shadow-lg rounded-lg p-6 w-full sm:max-w-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Login
        </h2>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Field */}
          <div>
            <label className="block text-gray-700">Username:</label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: { value: 4, message: "At least 4 characters" },
                maxLength: { value: 8, message: "At most 8 characters" },
              })}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-red-600 text-sm">{errors.username.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full text-white font-semibold py-2 px-4 rounded transition ${
              isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Watch Example */}
        <p className="mt-4 text-center text-gray-600 text-sm">
          Username: <span className="font-bold">{watch("username") || "..."}</span>
        </p>

        {/* Manual Value Set Example */}
        <button
          type="button"
          onClick={() => setValue("username", "Abdur Rahman")}
          className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Autofill Username
        </button>
      </div>
    </div>
  );
};

export default Login;
