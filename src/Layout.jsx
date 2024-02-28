import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
// import ComponentTest from "./components/ComponentTest";

export default function Layout() {
  return (
    <>
      <div className="flex h-screen dark:bg-slate-50">
        <NavBar />
        {/* <ComponentTest /> */}
        <section className="flex-1 py-10 flex flex-col justify-center items-center">
          <Header />
          <Outlet />
        </section>
      </div>
    </>
  );
}
