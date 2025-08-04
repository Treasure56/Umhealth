import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <section className="app-container lg:py-20 py-10">
      <section className="max-w-[500px] w-full flex justify-self-center items-center   lg:px-10 lg:py-15 py-12">
        <div className="w-[100%]">
          <h2 className="lg:text-4xl text-3xl font-bold pb-5 text-brand-primary">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Sign-in to continue using UM-Health
          </p>
          <div className="">
            <LoginForm />
          </div>
        </div>
      </section>
    </section>
  );
}
