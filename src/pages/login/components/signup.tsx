import googleIcon from "@/assets/Google.svg";
import facebookIcon from "@/assets/Facebook.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/schema";
import { createFirebaseUser, sendConfirmationEmail } from "@/config/firebase";
import { Link } from "react-router-dom";
import { useAddUserMutation } from "@/state/services/user";
import clsx from "clsx";
import AlertDialogI from "@/components/alertDialog";
import { alertOpened } from "@/state/slices/alertSlice";
import { useState } from "react";
import { useAppDispatch } from "@/state/hooks";

const EMAIL_VERIFICATION_MESSAGE =
  "Please check your inbox to verify your email";

export default function SignUp() {
  const dispatch = useAppDispatch();
  const [addUser, { isLoading }] = useAddUserMutation();
  const [createFirebaseUserPending, setCreateFirebaseUserPending] =
    useState(false);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      setCreateFirebaseUserPending(true);
      const firebaseUser = await createFirebaseUser(data.email, data.password);

      if (firebaseUser != null) {
        await sendConfirmationEmail(firebaseUser.user);
        addUser({ email: data.email, fullName: data.fullName });
        dispatch(alertOpened({ open: true }));
        setCreateFirebaseUserPending(false);

        setTimeout(() => {
          dispatch(alertOpened({ open: false }));
        }, 6000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="space-y-3 md:space-y-6 max-w-[486px] ml-auto mr-auto">
      <AlertDialogI message={EMAIL_VERIFICATION_MESSAGE} />
      <div className="space-y-3">
        <h1 className="font-bold text-xl md:text-3xl">
          Sign up your account &#128075;
        </h1>
        <h2 className="text-gray-600 font-semibold text-sm md:text-base">
          Let’s Enter your data to continue use healthy 24 services
        </h2>
      </div>

      <form
        className="space-y-3 md:space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label className="block font-bold">Fullname </label>
          <input
            {...register("fullName")}
            className="w-full rounded-md border border-gray-500 p-2"
            type="text"
            placeholder="Enter your name here"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-bold">Email </label>
          <input
            {...register("email")}
            className="w-full rounded-md border border-gray-500 p-2"
            type="email"
            placeholder="Enter your email here"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-bold">Password</label>
          <input
            {...register("password")}
            className="w-full rounded-md border border-gray-500 p-2"
            type="password"
            placeholder="Enter your password here"
          />
        </div>
        <div className="flex gap-x-2">
          <input type="checkbox" />
          <span className="text-sm md:text-base">
            by sign up to healthy 24 you agree all <b>term</b> and{" "}
            <b>condition</b>
          </span>
        </div>
        <div>
          <button
            className={clsx(
              "bg-[#103F74] p-3 text-white rounded-md w-full mt-7",
              (createFirebaseUserPending || isLoading) &&
                "bg-gray-400 pointer-events-none",
            )}
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className="text-center font-semibold">Or</p>
      <div className="space-y-5">
        <button className="w-full rounded-md border border-gray-700 p-3 bg-transparent">
          <span className="flex items-center justify-center gap-x-2">
            <img className="inline" src={googleIcon} /> Sign Up with google
          </span>
        </button>
        <button className="w-full rounded-md border border-gray-700 p-3 bg-transparent">
          <span className="flex items-center justify-center gap-x-2">
            <img className="inline" src={facebookIcon} />
            Sign Up with facebook
          </span>{" "}
        </button>
      </div>
      <div className="text-center">
        <span>
          You Already have account ?{" "}
          <Link to="/signin" className="font-bold cursor-pointer">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
}
