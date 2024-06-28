import googleIcon from "@/assets/Google.svg";
import facebookIcon from "@/assets/Facebook.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinFirebaseUser } from "@/config/firebase";
import { useAppDispatch } from "@/state/hooks";
import { tokenSaved } from "@/state/slices/authSlice";
import { useState } from "react";
import clsx from "clsx";
import { alertOpened } from "@/state/slices/alertSlice";
import AlertDialogI from "@/components/alertDialog";

const EMAIL_VERIFICATION_MESSAGE =
  "Please check your inbox to verify your email";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signinFirebaseUserPending, setSigninFirebaseUserPending] =
    useState(false);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setSigninFirebaseUserPending(true);
      const firebaseUser = await signinFirebaseUser(data.email, data.password);
      const token = await firebaseUser.user.getIdToken();

      dispatch(
        tokenSaved({
          token: token,
          isEmailVerified: firebaseUser.user.emailVerified,
        }),
      );

      setSigninFirebaseUserPending(false);
      if (firebaseUser.user.emailVerified) navigate("app/medical-history");
      else {
        dispatch(alertOpened({ open: true }));
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
          Welcome To Healthy 24 &#128076;
        </h1>
        <h2 className="text-gray-600 font-semibold text-sm md:text-base">
          Enter your account to use healthy 24 service
        </h2>
      </div>

      <form
        className="space-y-3 md:space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <div className="flex">
            <label className="space-x-1">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <span className="ml-auto">Forgot password?</span>
          </div>
        </div>

        <div>
          <button
            className={clsx(
              "bg-[#103F74] p-3 text-white rounded-md w-full mt-7",
              signinFirebaseUserPending && "bg-gray-400 pointer-events-none",
            )}
          >
            Sign In
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
          <Link to="/signup" className="font-bold cursor-pointer">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}
