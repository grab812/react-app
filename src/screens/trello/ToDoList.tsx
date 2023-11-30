import { useState } from "react";
import { useForm } from "react-hook-form";
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordCheck: string;
  Address?: string;
  ExtraError?: string;
}
function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("ExtraError", { message: "Server offline" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "FirstName is required",
            validate: (value) =>
              value.includes("rameee") ? "no rameee allowed" : true,
            minLength: {
              value: 10,
              message: "Your First Name is too short.",
            },
          })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <input
          {...register("passwordCheck", { required: true })}
          placeholder="PasswordCheck"
        />
        <input {...register("Address")} placeholder="Address" />
        <button>Add</button>
        <span>{errors?.ExtraError?.message}</span>
      </form>
    </div>
  );
}
export default ToDoList;
