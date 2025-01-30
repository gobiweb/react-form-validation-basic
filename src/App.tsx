// App.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, formSchema } from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema), 
  });

  const onSubmitData = (data: FormData) => {
    console.log("DATA Submitted", data);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmitData)}>
        <h2>Sign Up</h2>

        {/* First Name */}
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            {...register("firstName")}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            {...register("lastName")}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
