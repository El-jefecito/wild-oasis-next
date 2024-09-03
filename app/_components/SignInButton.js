import { signInAction } from "../_lib/action";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="hover:bg-orange-100 transition-all duration-500 hover:ease-in-out hover:text-black flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
