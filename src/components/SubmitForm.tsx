import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(1, "username is required"),
  email: z
    .string()
    .min(1, "email is required")
    .email("Email format is not valid"),
  password: z.string().min(6, "Password is required"),
  confirmpassword: z.string().min(6, "Password is required"),
  date: z
    .date()
    .refine((value) => value !== null, { message: "Birthday is required" }),

  gender: z.string().refine((value) => ["Men", "Women"].includes(value), {
    message: "please select you gender",
  }),
});

type formValues = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  date: Date | null;
  gender: string;
};

const SubmitForm = () => {
  const form = useForm<formValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      date: null,
      gender: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: formValues) => {
    console.log("form submitted", data);
  };

  return (
    <div className=" flex items-center justify-center min-h-screen bg-green-200 px-3 py-5 ">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Zod+React-hook-form</h1>
        <div className="mb-[10px]">
          <label className="font-bold flex mb-1">UserName</label>
          <input
            type="text"
            id="UserName"
            {...register("username")}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.username?.message && "border-red-500"
            } focus:${
              errors.username?.message
                ? "border-2 border-red-300"
                : "border-2 border-gold-600"
            }`}
          />
          <p className="text-red-500 text-xs">{errors.username?.message}</p>
        </div>
        <div>
          <label className="font-bold flex mb-1">Email</label>
          <input
            type="email"
            id="Email"
            {...register("email")}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.username?.message && "border-red-500"
            } focus:${
              errors.username?.message
                ? "border-2 border-red-300"
                : "border-2 border-gold-600"
            }`}
          />
          <p className="text-red-500 text-xs">{errors.email?.message}</p>
        </div>
        <div>
          <label className="font-bold flex mb-1">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.password?.message && "border-red-500"
            } focus:${
              errors.password?.message
                ? "border-2 border-red-300"
                : "border-2 border-gold-600"
            }`}
          />
          <p className="text-red-500 text-xs">{errors.password?.message}</p>
        </div>
        <div>
          <label className="font-bold flex mb-1">Confirm Password</label>
          <input
            type="password"
            id="password"
            {...register("confirmpassword")}
            className={`focus:outline-none border-2 text-sm rounded-md w-full p-2 ${
              errors.confirmpassword?.message && "border-red-500"
            } focus:${
              errors.confirmpassword?.message
                ? "border-2 border-red-300"
                : "border-2 border-gold-600"
            }`}
          />
          <p className="text-red-500 text-xs">
            {errors.confirmpassword?.message}
          </p>
        </div>

        <div className="new-expense__control">
          <label className="font-bold flex mb-1">Birthday</label>
          <input
            {...register("date")}
            className={`border rounded-md p-2 text-sm w-full`}
            type="date"
            name="date"
          />
          <p className="text-red-500 text-xs">{errors.date?.message}</p>
        </div>

        <div className="mb-4">
          <label className="font-bold block mb-1">Gender</label>
          <div className="flex">
            <input
              type="radio"
              id="men"
              //It tells React Hook Form to track this input's value under the key "gender" in the form's state. It also allows you to apply validation rules if needed.
              //for example  if you want to add validation to the gender field {...register("gender", { required: "Gender is required" })}
              {...register("gender")}
              value="Men"
              className="mr-2"
            />
            <label htmlFor="men" className="mr-4">
              Men
            </label>

            <input
              type="radio"
              id="women"
              {...register("gender")}
              value="Women"
              className="mr-2"
            />
            <label htmlFor="women">Women</label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>
          )}
        </div>
        <button className=" border-2 border-yellow-400 block width-200  rounded-[4px] mb-[20px] px-3 py-1.5 text-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;
